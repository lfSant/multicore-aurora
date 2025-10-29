import { createCipheriv, publicEncrypt, constants, randomBytes } from 'node:crypto';

export interface AESConfig {
  /** Modo AES. Por defecto GCM. */
  mode?: 'GCM' | 'CBC' | 'CTR' | 'CFB';
  /** Tamaño de llave en bits. Por defecto 256. */
  keySize?: 128 | 192 | 256;
  /** Tamaño esperado del IV en bytes. Si no se pasa, usa el largo real del IV provisto. */
  ivSize?: number;
  /** Si se requiere devolver Base64URL en lugar de Base64 clásico. Default false. */
  base64Url?: boolean;
}

export interface RSAConfig {
  /** OAEP (por defecto) o PKCS1 v1.5 */
  padding?: 'OAEP' | 'PKCS1';
  /** Hash OAEP (solo si padding=OAEP). Por defecto sha256. */
  oaepHash?: 'sha256' | 'sha384' | 'sha512' | 'sha1';
  /** Base64URL en lugar de Base64 para la salida RSA. */
  base64Url?: boolean;
}

/** ==== Utils ==== */
function normalizePem(pem: string): string {
  return pem.replace(/\\n/g, '\n').trim();
}
function toB64(buf: Buffer): string {
  return buf.toString('base64');
}
function toB64Url(b64: string): string {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function fromAscii(text: string): Buffer {
  // Nuestras llaves/IV vienen como ASCII legible (UTF-8), no hex ni base64
  return Buffer.from(text, 'utf8');
}

/** ==== RSA: cifra texto ASCII crudo y devuelve Base64/Base64URL ==== */
export function encryptRSA(plainAscii: string, publicKey: string, config?: RSAConfig): string {
  try {
    const buffer = fromAscii(plainAscii);
    const padding = config?.padding === 'PKCS1'
      ? constants.RSA_PKCS1_PADDING
      : constants.RSA_PKCS1_OAEP_PADDING;

    const encrypted = publicEncrypt(
      { key: normalizePem(publicKey), padding, oaepHash: config?.oaepHash || 'sha256' },
      buffer
    );
    const out = toB64(encrypted);
    return config?.base64Url ? toB64Url(out) : out;
  } catch (error) {
    throw new Error(`Error en encriptación RSA: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * AES: claves/IV **ASCII crudo** desde DB.
 * - GCM: retorna Base64(ciphertext || authTag)
 * - CBC/CTR/CFB: retorna Base64(ciphertext)
 */
export function encryptAES(
  dataUtf8: string,
  keyAscii: string,
  ivAscii: string,
  config?: AESConfig
): string {
  try {
    const mode    = config?.mode ?? 'GCM';
    const keySize = config?.keySize ?? 256;

    const key = fromAscii(keyAscii);
    const iv  = fromAscii(ivAscii);

    const expectedKeyLength = keySize / 8; // 16, 24, 32
    if (key.length !== expectedKeyLength) {
      throw new Error(`AES-${keySize}: key debe ser de ${expectedKeyLength} bytes, recibido ${key.length}.`);
    }

    const expectedIvSize = config?.ivSize ?? iv.length;
    if (iv.length !== expectedIvSize) {
      throw new Error(`IV para AES-${mode} debe ser de ${expectedIvSize} bytes, recibido ${iv.length}.`);
    }

    const algorithm = `aes-${keySize}-${mode.toLowerCase()}`;
    const cipher = createCipheriv(algorithm, key, iv);

    const ct = Buffer.concat([cipher.update(dataUtf8, 'utf8'), cipher.final()]);

    if (mode === 'GCM') {
      const tag = (cipher as any).getAuthTag(); // 16 bytes
      const out = toB64(Buffer.concat([ct, tag])); // ciphertext||tag
      return config?.base64Url ? toB64Url(out) : out;
    }

    const out = toB64(ct);
    return config?.base64Url ? toB64Url(out) : out;
  } catch (error) {
    throw new Error(`Error en encriptación AES: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/** ==== Core de wrapper ==== */
type Algo = 'AES' | 'RSA';
type EncryptConfig = { aes?: AESConfig; rsa?: RSAConfig };

function processEncryptedValue(
  value: string,                 // '{body}' | '{aes.key}' | '{aes.iv}' | string literal
  algorithm: Algo,
  keys: Record<string, any>,     // { aes: { key: <ASCII>, iv: <ASCII> }, rsa: { publicKey: <PEM> } }
  bodyString: string,
  encryptConfig?: EncryptConfig
): string {
  // 1) Resolver placeholder
  let dataToEncrypt = value;
  if (value === '{body}') {
    dataToEncrypt = bodyString;
  } else if (value.startsWith('{aes.')) {
    const field = value.replace('{aes.', '').replace('}', ''); // 'key' | 'iv'
    dataToEncrypt = keys.aes?.[field] ?? '';
  } else if (value.startsWith('{rsa.')) {
    const field = value.replace('{rsa.', '').replace('}', '');
    dataToEncrypt = keys.rsa?.[field] ?? '';
  }

  // 2) Cifrar
  if (algorithm === 'AES') {
    if (!keys.aes?.key || !keys.aes?.iv) {
      throw new Error('Keys AES (key, iv) son requeridas');
    }
    // ⚠️ Opción 2: key/iv vienen **ASCII crudo** desde DB
    return encryptAES(dataToEncrypt, keys.aes.key, keys.aes.iv, encryptConfig?.aes);
  } else {
    if (!keys.rsa?.publicKey) {
      throw new Error('publicKey RSA es requerida');
    }
    // ⚠️ Opción 2: RSA cifra **ASCII crudo** (tal cual)
    return encryptRSA(dataToEncrypt, keys.rsa.publicKey, encryptConfig?.rsa);
  }
}

function processWrapperNode(
  node: any,
  keys: Record<string, any>,
  bodyString: string,
  encryptConfig?: EncryptConfig
): any {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(i => processWrapperNode(i, keys, bodyString, encryptConfig));
  if (node && typeof node === 'object') {
    if (node.value !== undefined && node.algorithm !== undefined) {
      return processEncryptedValue(node.value, node.algorithm, keys, bodyString, encryptConfig);
    }
    const out: any = {};
    for (const [k, v] of Object.entries(node)) out[k] = processWrapperNode(v, keys, bodyString, encryptConfig);
    return out;
  }
  return node;
}

/** ==== API principal ==== */
export function encryptBody(
  bodyObj: any,
  algorithms: Algo[],
  keys: Record<string, any>,              // { aes: { key: ASCII, iv: ASCII }, rsa: { publicKey: PEM } }
  wrapper?: Record<string, any>,
  encryptConfig?: EncryptConfig
): any {
  if (!algorithms?.length) {
    throw new Error('Al menos un algoritmo debe estar especificado');
  }

  const bodyString = JSON.stringify(bodyObj);

  if (!wrapper || !Object.keys(wrapper).length) {
    const defaultAlgo = algorithms[0];
    const encrypted = processEncryptedValue('{body}', defaultAlgo, keys, bodyString, encryptConfig);
    return { data: encrypted };
  }
  return processWrapperNode(wrapper, keys, bodyString, encryptConfig);
}

/** ==== Helpers opcionales que te pueden servir a futuro ==== */
/** Genera IV aleatorio del tamaño indicado (útil si algún core permite IV variable) */
export function generateIv(bytes: number = 12): string {
  return randomBytes(bytes).toString('utf8'); // si algún core pide IV ASCII específico, no usar aleatorio.
}
/** Convierte Base64→Base64URL (por si algún core lo pide) */
export function asBase64Url(b64: string): string {
  return toB64Url(b64);
}

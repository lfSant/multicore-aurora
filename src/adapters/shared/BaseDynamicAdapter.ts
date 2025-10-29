import { MappingConfigRepo } from '../../dynamic/repo/MappingConfigRepo';
import { KVCache } from '../../dynamic/cache/KVCache';
import { MappingConfig } from '../../dynamic/mapping-config';
import {
  mapResponse,
  evaluateBusinessError,
  mapRequest,
  mapLegacy,
  encryptBody
} from '../../dynamic/engine/index';
import { ProviderCallConfig } from '../../core/shared/http';
import { executeHttp } from '../http/axios-executor';
import { ProviderHttpError } from '../../core/shared/errors';

export class BaseDynamicAdapter<TItem> {
  constructor(
    private readonly repo: MappingConfigRepo,
    private readonly cache: KVCache,
    private readonly providerKey: string,
    private readonly operationKey: string,
    private readonly cacheTTL = 60
  ) { }

  private cacheKey(tenant?: string, env?: string) {
    return `${tenant || '_'}/${env || '_'}/${this.providerKey}/${this.operationKey
      }`;
  }

  async run(
    stdInput: any,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ) {
    const ck = this.cacheKey(options?.tenant, options?.environment);

    let cfg: MappingConfig | null = await this.cache.get<MappingConfig>(ck);
    if (!cfg) {
      cfg = await this.repo.getActive(
        this.providerKey,
        this.operationKey,
        options?.tenant,
        options?.environment
      );
      if (!cfg)
        throw new ProviderHttpError(
          'Config de mapeo no disponible',
          500,
          this.providerKey
        );
      await this.cache.set(ck, cfg, this.cacheTTL);
    }
    const req = mapRequest(stdInput, cfg);

    const base = http.baseUrl ?? '';
    const path = cfg.request_path || '';
    const finalUrl = http.url ?? `${base}${path}`;

    const method = (http.method ?? cfg.request_method ?? 'POST') as
      | 'GET'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'PATCH';
    const timeoutMs = http.timeoutMs ?? cfg.request_timeout_ms ?? 8000;

    // Prioridad: request mapper > config BD > http config
    // Los headers de la BD tienen prioridad sobre los del http config
    const headers = {
      ...(http.headers || {}),
      ...(cfg.default_headers_json || {}),
      ...(req.headers || {}),
    };
    const params = {
      ...(http.params || {}),
      ...(cfg.default_params_json || {}),
      ...(req.params || {}),
    };

    // Aplicar encriptación si está habilitada
    let finalBody = req.body;
    if (cfg.request_encrypt_enabled && cfg.request_encrypt_algorithms && cfg.request_encrypt_keys) {
      finalBody = encryptBody(
        req.body,
        cfg.request_encrypt_algorithms,
        cfg.request_encrypt_keys,
        cfg.request_encrypt_wrapper,
        cfg.request_encrypt_config as any
      );
    }

    // Serializar body según Content-Type
    let bodyToSend: any = finalBody;
    const contentType = headers['Content-Type'] || headers['content-type'];
    if (contentType?.includes('application/x-www-form-urlencoded')) {
      // Convertir objeto a query string: {SessionKey: "...", IV: "...", Data: "..."} → "SessionKey=...&IV=...&Data=..."
      bodyToSend = new URLSearchParams(finalBody).toString();
    }

    const res = await executeHttp({
      url: finalUrl,
      method,
      headers,
      params,
      timeoutMs,
      data: bodyToSend,
    });

    if (res.status < 200 || res.status >= 300) {
      throw new ProviderHttpError(
        `Proveedor ${this.providerKey} (${this.operationKey}) HTTP ${res.status}`,
        res.status,
        this.providerKey,
        {
          headersCore: res.headers,
          dataCore: res.data,
          timeResponseMs: res.timeResponseMs,
          urlRequest: finalUrl,
          bodyRequest: bodyToSend, // Usar el body serializado, no el original
          headersRequest: headers,
          paramsRequest: params,
        }
      );
    }

    const biz = evaluateBusinessError(
      res.status,
      res.data,
      (cfg as any).error_rules_json || []
    );
    if (biz) {
      throw new ProviderHttpError(
        biz.server,
        biz.status,
        this.providerKey,
        {
          headersCore: res.headers,
          dataCore: res.data,
          timeResponseMs: res.timeResponseMs,
          urlRequest: finalUrl,
          bodyRequest: bodyToSend, // Usar el body serializado, no el original
          headersRequest: headers,
          paramsRequest: params,
        },
        biz.codeHint,
        biz.client
      );
    }

    const providerPack = { status: res.status, headers: res.headers, body: res.data };
    const mapped = mapResponse(providerPack, cfg);

    let aditionalData: Record<string, any> | undefined;
    if ((cfg as any).legacy_enabled && (cfg as any).legacy_map_json) {
      try {
        const legacy = mapLegacy(providerPack, (cfg as any).legacy_map_json);
        if (legacy != null) {
          aditionalData = { legacyMap: legacy };
        }
      } catch {
        aditionalData = { legacyMap: { error: 'legacy-map-failed' } };
      }
    }

    return {
      items: (mapped.items as TItem[]) ?? [],
      status: res.status,
      provider: this.providerKey,
      aditionalData,
      raw: cfg.response_raw
        ? {
          headersCore: res.headers,
          dataCore: res.data,
          timeResponseCoreMs: res.timeResponseMs,
          urlRequest: finalUrl,
          bodyRequest: bodyToSend, // Usar el body serializado, no el original
          headersRequest: headers,
          paramsRequest: params,
        }
        : undefined,
    };
  }
}

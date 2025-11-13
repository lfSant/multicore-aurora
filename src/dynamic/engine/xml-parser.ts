/**
 * Parsea XML y extrae nodos que coincidan con el patrón
 * Funciona en Node.js usando xmldom
 */

interface ParseXmlOptions {
  mode: 'array' | 'object';
  nodePattern?: string;
  itemPrefix?: string;
}

/**
 * Parsea un string XML y extrae los nodos de texto
 * @param xmlString - String XML a parsear
 * @param options - Opciones de parseo
 * @returns Array de strings o objeto con propiedades Item1, Item2, etc.
 */
export function parseXmlToLines(xmlString: string, options: ParseXmlOptions): string[] | Record<string, string> | undefined {
  if (!xmlString || typeof xmlString !== 'string') {
    return undefined;
  }

  try {
    // Usar DOMParser en entorno browser o xmldom en Node.js
    let parser: DOMParser;
    
    if (typeof DOMParser !== 'undefined') {
      // Browser environment
      parser = new DOMParser();
    } else {
      // Node.js environment - usar xmldom dinámicamente
      const { DOMParser: NodeDOMParser } = require('@xmldom/xmldom');
      parser = new NodeDOMParser();
    }

    const doc = parser.parseFromString(xmlString, 'text/xml');
    
    // Verificar errores de parseo
    const parseError = doc.getElementsByTagName('parsererror');
    if (parseError.length > 0) {
      console.error('Error parsing XML:', parseError[0].textContent);
      return undefined;
    }

    // Extraer nodos según el patrón
    const pattern = options.nodePattern || 'LINEA_';
    const allNodes = doc.getElementsByTagName('*');
    const lines: string[] = [];

    for (let i = 0; i < allNodes.length; i++) {
      const node = allNodes[i];
      if (node.tagName.startsWith(pattern)) {
        const textContent = node.textContent?.trim() || '';
        lines.push(textContent);
      }
    }

    // Retornar según el modo
    if (options.mode === 'array') {
      return lines;
    } else {
      // Modo object: Item1, Item2, Item3...
      const prefix = options.itemPrefix || 'Item';
      const result: Record<string, string> = {};
      lines.forEach((line, index) => {
        result[`${prefix}${index + 1}`] = line;
      });
      return result;
    }
  } catch (error) {
    console.error('Error in parseXmlToLines:', error);
    return undefined;
  }
}

/**
 * Versión simplificada usando regex para extraer contenido de nodos XML
 * Útil cuando xmldom no está disponible
 */
export function parseXmlToLinesRegex(xmlString: string, options: ParseXmlOptions): string[] | Record<string, string> | undefined {
  if (!xmlString || typeof xmlString !== 'string') {
    return undefined;
  }

  try {
    const pattern = options.nodePattern || 'LINEA_';
    const regex = new RegExp(`<(${pattern}\\d+)>([^<]*)<\/\\1>`, 'g');
    const lines: string[] = [];
    let match;

    while ((match = regex.exec(xmlString)) !== null) {
      lines.push(match[2].trim());
    }

    if (lines.length === 0) {
      return undefined;
    }

    // Retornar según el modo
    if (options.mode === 'array') {
      return lines;
    } else {
      // Modo object: Item1, Item2, Item3...
      const prefix = options.itemPrefix || 'Item';
      const result: Record<string, string> = {};
      lines.forEach((line, index) => {
        result[`${prefix}${index + 1}`] = line;
      });
      return result;
    }
  } catch (error) {
    console.error('Error in parseXmlToLinesRegex:', error);
    return undefined;
  }
}

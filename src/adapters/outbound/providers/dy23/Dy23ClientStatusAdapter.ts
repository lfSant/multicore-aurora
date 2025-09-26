import { ClientStatusProviderPort, CheckClientActiveCommand, ClientActiveStatus, ProviderCallConfig, ProviderResult, ProviderHttpError } from "../../../../core/index";
import { executeHttp } from "../../../../adapters/http/axios-executor";
import { toDy23Request, fromDy23Response } from "./operations/exists-active/mappers/exists-active.mapper";
import { Dy23ExistsActiveResponseSchema } from "./operations/exists-active/validators/exists-active.res.schema";
import { mapDy23BusinessError } from "./error-map";

export class Dy23ClientStatusAdapter implements ClientStatusProviderPort {
  async existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<ProviderResult<ClientActiveStatus>> {

    const reqBody = toDy23Request(cmd); // { identificacionCliente: ... } convertido a la respuesta que espera el core dy-23
    const method = http.method ?? 'POST';

    const res = await executeHttp({
      url: http.url,
      method,
      headers: http.headers,
      params: http.params,
      timeoutMs: http.timeoutMs,
      data: reqBody,
    });

    // Si el core responde 4xx/5xx => error técnico
    if (res.status < 200 || res.status >= 300) {
      throw new ProviderHttpError(
        `Proveedor dy-23 (existsActive) HTTP ${res.status}`,
        res.status,
        'dy-23',
        { headersCore: res.headers, dataCore: res.data },
      );
    }

    // Validación de payload esperado (ajusta el schema a tu contrato real)
    // Si tu core devuelve otra forma, agrega más unions/guards aquí
    const parsed = Dy23ExistsActiveResponseSchema.safeParse(res.data);
    if (!parsed.success) {
      // ¿El core devuelve success:false con messages[]? Mapea a error de negocio:
      if (res.data && res.data.success === false && Array.isArray(res.data.messages)) {
        const mapped = mapDy23BusinessError(res.data);
        throw new ProviderHttpError(
          mapped.serverMsg,
          mapped.status,
          'dy-23',
          { headersCore: res.headers, dataCore: res.data },
          mapped.codeHint
        );
      }
      // No cumple schema y tampoco es un business-error reconocido
      throw new ProviderHttpError(
        `Respuesta de existsActive no cumple contrato: ${parsed.error.message}`,
        502,
        'dy-23',
        { headersCore: res.headers, dataCore: res.data },
        'E-SCHEMA'
      );
    }

    // OK → mapear al canónico
    const items: ClientActiveStatus[] = fromDy23Response(parsed.data);

    return {
      items,
      status: res.status,
      provider: 'dy-23',
      raw: { headersCore: res.headers, dataCore: res.data },
    };
  }
}

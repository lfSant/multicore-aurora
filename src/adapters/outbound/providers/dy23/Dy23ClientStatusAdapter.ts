import { ClientStatusProviderPort, CheckClientActiveCommand, ClientActiveStatus } from "../../../../core/index";
import { toDy23Request, fromDy23Response } from "./operations/exists-active/mappers/exists-active.mapper";
import { Dy23ExistsActiveResponseSchema } from "./operations/exists-active/validators/exists-active.res.schema";
import { ProviderHttpError } from "../../../../core/shared/errors";
import axios from "axios";
import { ProviderCallConfig } from "../../../../core/shared/http";

export class Dy23ClientStatusAdapter implements ClientStatusProviderPort {
  async existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<ClientActiveStatus[]> {
    const req = toDy23Request(cmd);

    // defaults seguros
    const method = http.method ?? 'POST';
    const timeout = http.timeoutMs ?? 8000;

    try {
      const res = await axios.request({
        url: http.url,
        method,
        data: req,
        headers: http.headers,
        timeout,
        validateStatus: () => true
      });

      // errores HTTP
      if (res.status < 200 || res.status >= 300) {
        console.error('Dy23ClientStatusAdapter: respuesta con error', { status: res.status, data: res.data });
        throw new ProviderHttpError(
          `Core dy-23 devolvió HTTP ${res.status}`,
          res.status,
          res.data
        );
      }

      // validar payload del proveedor
      const parsed = Dy23ExistsActiveResponseSchema.parse(res.data);
      return fromDy23Response(parsed);

    } catch (err: any) {
      // errores de red / timeout / validación
      if (err instanceof ProviderHttpError) throw err;

      // AxiosError o ZodError u otros
      const statusGuess =
        err?.code === 'ECONNABORTED' ? 504 :
          err?.response?.status ?? 502;

      const message =
        err?.name === 'ZodError'
          ? `Respuesta del proveedor no cumple contrato: ${err.message}`
          : err?.message ?? 'Error en llamada al proveedor';

      throw new ProviderHttpError(message, statusGuess, err?.response?.data);
    }
  }
}

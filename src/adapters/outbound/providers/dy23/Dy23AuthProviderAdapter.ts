import axios from "axios";
import { AuthProviderPort, AuthCoreActiveCommand, AuthCoreActiveStatus, ProviderCallConfig, ProviderHttpError } from "../../../../core/index";
import { toDy23AuthRequest, fromDy23AuthResponse } from "./operations/auth-core-active/mappers/auth-core-active.mapper";
import { Dy23AuthCoreActiveResponseSchema } from "./operations/auth-core-active/validators/auth-core-active.res.schema";

export class Dy23AuthProviderAdapter implements AuthProviderPort {
    async authUserActive(
        cmd: AuthCoreActiveCommand,
        http: ProviderCallConfig
    ): Promise<AuthCoreActiveStatus[]> {
        const req = toDy23AuthRequest(cmd);
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
            if (res.status < 200 || res.status >= 300) {
                throw new ProviderHttpError(`Proveedor dy-23 auth HTTP ${res.status}`, res.status, res.data);
            }
            const parsed = Dy23AuthCoreActiveResponseSchema.parse(res.data);
            console.log(`Servicio dy-23 auth validate exitoso: ${JSON.stringify(parsed)}`);
            return fromDy23AuthResponse(parsed);
        } catch (err: any) {
            if (err instanceof ProviderHttpError) throw err;
            const statusGuess =
                err?.code === 'ECONNABORTED' ? 504 :
                    err?.response?.status ?? 502;
            const message =
                err?.name === 'ZodError'
                    ? `Respuesta de autenticación no cumple contrato: ${err.message}`
                    : err?.message ?? 'Error en llamada de autenticación';
            throw new ProviderHttpError(message, statusGuess, err?.response?.data);
        }
    }
}

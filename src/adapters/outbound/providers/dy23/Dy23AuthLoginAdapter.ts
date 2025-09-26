import axios from "axios";
import { AuthLoginProviderPort, LoginCommand, LoginResult, ProviderCallConfig, ProviderHttpError } from "../../../../core/index";
import { toDy23AuthLoginRequest, fromDy23AuthLoginResponse } from "./operations/auth-login/mappers/auth-login.mapper";
import { Dy23AuthLoginResponseSchema } from "./operations/auth-login/validators/auth-login.res.schema";

export class Dy23AuthLoginAdapter implements AuthLoginProviderPort {
    async login(cmd: LoginCommand, http: ProviderCallConfig): Promise<LoginResult[]> {
        const req = toDy23AuthLoginRequest(cmd);
        const method = http.method ?? 'POST';
        const timeout = http.timeoutMs ?? 8000;

        try {
            const res = await axios.request({
                url: http.url, method, data: req, headers: http.headers, timeout,
                validateStatus: () => true
            });

            if (res.status < 200 || res.status >= 300) {
                throw new ProviderHttpError(`Proveedor dy-23 login HTTP ${res.status}`, res.status, res.data);
            }

            const parsed = Dy23AuthLoginResponseSchema.parse(res.data);
            const { items, businessError } = fromDy23AuthLoginResponse(parsed);

            // Si el proveedor retornó error de negocio, lo propagamos como ProviderHttpError 400
            // if (businessError) {
            //     throw new ProviderHttpError(
            //         businessError.serverMsg || businessError.clientMsg,
            //         400,
            //         { nextStep: businessError.nextStep, messages: businessError.rawMessages }
            //     );
            // }

            return items;

        } catch (err: any) {
            if (err instanceof ProviderHttpError) throw err;

            const statusGuess =
                err?.code === 'ECONNABORTED' ? 504 :
                    err?.response?.status ?? 502;

            const message =
                err?.name === 'ZodError'
                    ? `Respuesta de login no cumple contrato: ${err.message}`
                    : err?.message ?? 'Error en llamada de login';

            throw new ProviderHttpError(message, statusGuess, err?.response?.data);
        }
    }
}

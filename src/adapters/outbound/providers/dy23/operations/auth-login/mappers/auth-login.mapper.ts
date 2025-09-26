import { LoginCommand } from "../../../../../../../core/index";
import { LoginResult } from "../../../../../../../core/index";
import { Dy23AuthLoginRequest } from "../requests/auth-login.req";
import { Dy23AuthLoginResponseParsed } from "../validators/auth-login.res.schema";

export function toDy23AuthLoginRequest(cmd: LoginCommand): Dy23AuthLoginRequest {
  return {
    login: cmd.username,
    password: cmd.password,
    attributes: cmd.attributes ?? {}
  };
}

export function fromDy23AuthLoginResponse(res: Dy23AuthLoginResponseParsed): {
  items: LoginResult[],
  businessError?: { clientMsg: string; serverMsg: string; nextStep?: string; rawMessages?: unknown[] }
} {
  if ((res as any).success === false) {
    const messages = (res as any).messages ?? [];
    const clientMsg =
      messages[0]?.description || messages[0]?.message || "Operación no permitida";
    const serverMsg = messages.map((m: any) => m?.message || m?.description).filter(Boolean).join(" | ") || "";
    const nextStep = (res as any).nextStep;
    const login = (res as any)?.clientContext?._login ?? null;

    // En error de negocio devolvemos authenticated:false y preservamos hints en aditionalData (desde el usecase)
    return {
      items: [{
        authenticated: false,
        login,
        culture: null,
        terminalIp: null,
        context: (res as any)?.clientContext ?? undefined
      }],
      businessError: { clientMsg, serverMsg, nextStep, rawMessages: messages }
    };
  }

  // Éxito
  const ctx = (res as any)?.clientContext ?? {};
  const item: LoginResult = {
    authenticated: true,
    login: ctx._login ?? null,
    culture: ctx._culture ?? null,
    terminalIp: ctx._terminalIp ?? null,
    context: Object.keys(ctx).length ? ctx : undefined,
  };
  return { items: [item] };
}

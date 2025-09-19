import { AuthCoreActiveCommand, AuthCoreActiveStatus } from "../../../../../../../core/index";
import { Dy23AuthCoreActiveRequest } from "../requests/auth-core-active.req";
import { Dy23AuthCoreActiveResponseParsed } from "../validators/auth-core-active.res.schema";

export function toDy23AuthRequest(cmd: AuthCoreActiveCommand): Dy23AuthCoreActiveRequest {
  return { login: cmd.username, password: cmd.password, attributes: {} };
}

export function fromDy23AuthResponse(res: Dy23AuthCoreActiveResponseParsed): AuthCoreActiveStatus[] {
  const ret = res?.data?.responseData?.properties?.return?.value;
  const active = typeof ret === 'boolean' ? ret : ret === 'true';
  return typeof active === 'boolean' ? [{ active }] : [];
}

import { CheckClientActiveCommand, ClientActiveStatus } from "../../../../../../../core/index";
import { Dy23ExistsActiveRequest } from "../requests/exists-active.req";
import { Dy23ExistsActiveResponseParsed } from "../validators/exists-active.res.schema";

// canónico -> request dy-23
export function toDy23Request(cmd: CheckClientActiveCommand): Dy23ExistsActiveRequest {
  return { identificacionCliente: cmd.clientIdentification };
}

// dy-23 -> canónico (siempre devolvemos array; si nada, [])
export function fromDy23Response(res: Dy23ExistsActiveResponseParsed): ClientActiveStatus[] {
  const active = (res as any)?.existeActivo;
  if (typeof active === 'boolean') {
    return [{ active: active }];
  }
  return [];
}

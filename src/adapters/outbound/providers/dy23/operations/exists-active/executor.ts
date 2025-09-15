import { Dy23ExistsActiveRequest } from "./requests/exists-active.req";

export type Dy23ExistsActiveExecutor = (
  payload: Dy23ExistsActiveRequest
) => Promise<any>; // el backend devuelve el "data" bruto del core

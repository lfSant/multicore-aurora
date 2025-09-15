import { ClientStatusProviderPort, CheckClientActiveCommand, ClientActiveStatus } from "../../../../core/index";
import { dy23HttpClient } from "./client/http-client";
import { toDy23Request, fromDy23Response } from "./operations/exists-active/mappers/exists-active.mapper";
import { Dy23ExistsActiveResponseSchema } from "./operations/exists-active/validators/exists-active.res.schema";

// Implementa el puerto del dominio usando el core dy-23
export class Dy23ClientStatusAdapter implements ClientStatusProviderPort {
  async existsActive(cmd: CheckClientActiveCommand): Promise<ClientActiveStatus[]> {
    const req = toDy23Request(cmd);
    const { data } = await dy23HttpClient.post('/existeActivo', req);
    const parsed = Dy23ExistsActiveResponseSchema.parse(data);
    return fromDy23Response(parsed);
  }
}

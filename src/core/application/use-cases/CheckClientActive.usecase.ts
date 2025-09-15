import { CheckClientActiveCommand } from "../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../dto/results/ClientActiveStatus.result";
import { ClientStatusProviderPort } from "../ports/outbound/ClientStatusProviderPort";
import { CheckClientActiveCommandSchema } from "../validation/check-client-active.schema";
import { CanonicalResponse, successResponse } from "../../shared/envelope";

export class CheckClientActiveUseCase {
  constructor(private readonly provider: ClientStatusProviderPort) {}

  async execute(cmd: CheckClientActiveCommand): Promise<CanonicalResponse<ClientActiveStatus>> {
    let parsed = CheckClientActiveCommandSchema.parse(cmd);
    const items = await this.provider.existsActive(parsed);
    return successResponse<ClientActiveStatus>(items, {
      client: "Parámetros del usuario obtenidos correctamente"
    });
  }
}

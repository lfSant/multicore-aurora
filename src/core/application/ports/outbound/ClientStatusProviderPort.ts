import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/provider";
import { CheckClientActiveCommand } from "../../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../../dto/results/ClientActiveStatus.result";

export interface ClientStatusProviderPort {
  existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<ProviderResult<ClientActiveStatus>>;
}

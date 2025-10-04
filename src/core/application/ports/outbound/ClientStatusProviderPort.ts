import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { CheckClientActiveCommand } from "../../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../../dto/results/ClientActiveStatus.result";

export interface ClientStatusProviderPort {
  existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientActiveStatus>>;
}
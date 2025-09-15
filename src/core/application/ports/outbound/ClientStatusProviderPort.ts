import { ProviderCallConfig } from "../../../shared/http";
import { CheckClientActiveCommand } from "../../dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../../dto/results/ClientActiveStatus.result";

// Puerto (interfaz) que implementará el adapter del core dy-23
export interface ClientStatusProviderPort {
  existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig
  ): Promise<ClientActiveStatus[]>;
}

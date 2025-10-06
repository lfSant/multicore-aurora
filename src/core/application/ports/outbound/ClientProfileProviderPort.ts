import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetClientProfileCommand } from "../../dto/commands/GetClientProfile.command";
import { ClientProfile } from "../../dto/results/ClientProfile.result";

export interface ClientProfileProviderPort {
  getProfile(
    cmd: GetClientProfileCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientProfile>>;
}

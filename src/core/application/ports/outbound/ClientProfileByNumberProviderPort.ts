import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetClientProfileByNumberCommand } from "../../dto/commands/GetClientProfileByNumber.command";
import { ClientProfileByNumber } from "../../dto/results/ClientProfileByNumber.result";

export interface ClientProfileByNumberProviderPort {
  getProfile(
    cmd: GetClientProfileByNumberCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientProfileByNumber>>;
}

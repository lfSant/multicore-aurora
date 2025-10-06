import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { AuthPrecheckCommand } from "../../dto/commands/AuthPrecheck.command";
import { AuthPrecheckStatus } from "../../dto/results/AuthPrecheck.result";

export interface AuthPrecheckProviderPort {
  preCheck(
    cmd: AuthPrecheckCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AuthPrecheckStatus>>;
}

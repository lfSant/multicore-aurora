import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { AuthLoginCommand } from "../../dto/commands/AuthLogin.command";
import { AuthLogin } from "../../dto/results/AuthLogin.result";

export interface AuthLoginProviderPort {
  login(
    cmd: AuthLoginCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AuthLogin>>;
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { AuthLogin } from "../../core/application/dto/results/AuthLogin.result";
import { AuthLoginCommand } from "../../core/application/dto/commands/AuthLogin.command";
import { AuthLoginProviderPort } from "../../core/application/ports/outbound/AuthLoginProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class AuthLoginDynamicAdapter implements AuthLoginProviderPort{
  constructor(private readonly base: BaseDynamicAdapter<AuthLogin>) {}

  login(
    cmd: AuthLoginCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AuthLogin>> {
    return this.base.run(cmd, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { AuthPrecheckStatus } from "../../core/application/dto/results/AuthPrecheck.result";
import { AuthPrecheckCommand } from "../../core/application/dto/commands/AuthPrecheck.command";
import { AuthPrecheckProviderPort } from "../../core/application/ports/outbound/AuthPrecheckProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class AuthPrecheckDynamicAdapter implements AuthPrecheckProviderPort{
  constructor(private readonly base: BaseDynamicAdapter<AuthPrecheckStatus>) {}

  preCheck(
    cmd: AuthPrecheckCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AuthPrecheckStatus>> {
    return this.base.run(cmd, http, options);
  }
}

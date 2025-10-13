import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { AccountMovement } from "../../core/application/dto/results/AccountMovement.result";
import { GetAccountMovementsCommand } from "../../core/application/dto/commands/GetAccountMovements.command";
import { AccountMovementsProviderPort } from "../../core/application/ports/outbound/AccountMovementsProviderPort";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class AccountMovementsDynamicAdapter implements AccountMovementsProviderPort{
  constructor(private readonly base: BaseDynamicAdapter<AccountMovement[]>) {}

  getAccountMovements(
    cmd: GetAccountMovementsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountMovement[]>> {
    return this.base.run(cmd, http, options);
  }
}

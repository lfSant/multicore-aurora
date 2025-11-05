import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { DepositMovementsProviderPort } from "../../core/application/ports/outbound/DepositMovementsProviderPort";
import { GetDepositMovementsCommand } from "../../core/application/dto/commands/GetDepositMovements.command";
import { DepositMovement } from "../../core/application/dto/results/DepositMovement.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class DepositMovementsDynamicAdapter implements DepositMovementsProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<DepositMovement[]>) {}

  getDepositMovements(
    cmd: GetDepositMovementsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<DepositMovement[]>> {
    return this.base.run(cmd, http, options);
  }
}

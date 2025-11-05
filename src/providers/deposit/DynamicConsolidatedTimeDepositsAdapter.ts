import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ConsolidatedTimeDepositsProviderPort } from "../../core/application/ports/outbound/ConsolidatedTimeDepositsProviderPort";
import { GetConsolidatedTimeDepositsCommand } from "../../core/application/dto/commands/GetConsolidatedTimeDeposits.command";
import { TimeDeposit } from "../../core/application/dto/results/TimeDeposit.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ConsolidatedTimeDepositsDynamicAdapter implements ConsolidatedTimeDepositsProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<TimeDeposit[]>) {}

  getConsolidatedTimeDeposits(
    cmd: GetConsolidatedTimeDepositsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<TimeDeposit[]>> {
    return this.base.run(cmd, http, options);
  }
}

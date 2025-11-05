import { GetConsolidatedTimeDepositsCommand } from "../../dto/commands/GetConsolidatedTimeDeposits.command";
import { TimeDeposit } from "../../dto/results/TimeDeposit.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface ConsolidatedTimeDepositsProviderPort {
  getConsolidatedTimeDeposits(
    cmd: GetConsolidatedTimeDepositsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<TimeDeposit[]>>;
}

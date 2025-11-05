import { GetDepositMovementsCommand } from "../../dto/commands/GetDepositMovements.command";
import { DepositMovement } from "../../dto/results/DepositMovement.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface DepositMovementsProviderPort {
  getDepositMovements(
    cmd: GetDepositMovementsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<DepositMovement[]>>;
}

import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { GetAccountMovementsCommand } from "../../dto/commands/GetAccountMovements.command";
import { AccountMovement } from "../../dto/results/AccountMovement.result";

export interface AccountMovementsProviderPort {
  getAccountMovements(
    cmd: GetAccountMovementsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<AccountMovement[]>>;
}
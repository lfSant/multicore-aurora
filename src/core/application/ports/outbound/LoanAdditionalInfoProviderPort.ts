import { GetLoanAdditionalInfoCommand } from "../../dto/commands/GetLoanAdditionalInfo.command";
import { LoanAdditionalInfo } from "../../dto/results/LoanAdditionalInfo.result";
import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";

export interface LoanAdditionalInfoProviderPort {
  getLoanAdditionalInfo(
    cmd: GetLoanAdditionalInfoCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<LoanAdditionalInfo>>;
}

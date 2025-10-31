import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { LoanAdditionalInfoProviderPort } from "../../core/application/ports/outbound/LoanAdditionalInfoProviderPort";
import { GetLoanAdditionalInfoCommand } from "../../core/application/dto/commands/GetLoanAdditionalInfo.command";
import { LoanAdditionalInfo } from "../../core/application/dto/results/LoanAdditionalInfo.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class LoanAdditionalInfoDynamicAdapter implements LoanAdditionalInfoProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<LoanAdditionalInfo>) {}

  getLoanAdditionalInfo(
    cmd: GetLoanAdditionalInfoCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<LoanAdditionalInfo>> {
    return this.base.run(cmd, http, options);
  }
}

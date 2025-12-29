import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetUserBeneficiariesCommand } from "../../core/application/dto/commands/GetUserBeneficiaries.command";
import { GetUserBeneficiariesProviderPort } from "../../core/application/ports/outbound/GetUserBeneficiariesProviderPort";
import { UserBeneficiaryResult } from "../../core/application/dto/results/UserBeneficiary.result";

export class UserBeneficiariesDynamicAdapter implements GetUserBeneficiariesProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<UserBeneficiaryResult>) {}

  getUserBeneficiaries(
    cmd: GetUserBeneficiariesCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<UserBeneficiaryResult>> {
    return this.base.run(cmd, http, options);
  }
}

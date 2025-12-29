import { ProviderResult } from "../../../shared/types";
import { ProviderCallConfig } from "../../../shared/http";
import { UserBeneficiaryResult } from "../../dto/results/UserBeneficiary.result";
import { GetUserBeneficiariesCommand } from "../../dto/commands/GetUserBeneficiaries.command";

export interface GetUserBeneficiariesProviderPort {
  getUserBeneficiaries(
    cmd: GetUserBeneficiariesCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<UserBeneficiaryResult>>;
}

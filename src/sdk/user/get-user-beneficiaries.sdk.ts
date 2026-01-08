import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetUserBeneficiariesUseCase } from "../../core/application/use-cases/GetUserBeneficiaries.usecase";
import { GetUserBeneficiariesCommand } from "../../core/application/dto/commands/GetUserBeneficiaries.command";
import { UserBeneficiaryResult } from "../../core/application/dto/results/UserBeneficiary.result";
import { UserBeneficiariesDynamicAdapter } from "../../providers/user/UserBeneficiariesDynamicAdapter";

export function createGetUserBeneficiariesUseCase(
  providerKey: string,
  operationKey = "getUserBeneficiaries",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<UserBeneficiaryResult>(providerKey, operationKey, adapterOptions);
  const port = new UserBeneficiariesDynamicAdapter(base);
  return new GetUserBeneficiariesUseCase(port);
}

export async function getUserBeneficiaries(
  command: GetUserBeneficiariesCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<UserBeneficiaryResult>> {
  const uc = createGetUserBeneficiariesUseCase(
    opts.provider,
    opts.operation ?? "getUserBeneficiaries",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

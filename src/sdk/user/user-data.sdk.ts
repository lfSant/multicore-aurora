import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetUserDataUseCase } from "../../core/application/use-cases/GetUserData.usecase";
import { GetUserDataCommand } from "../../core/application/dto/commands/GetUserData.command";
import { UserDataResult } from "../../core/application/dto/results/UserData.result";
import { UserDataDynamicAdapter } from "../../providers/user/UserDataDynamicAdapter";

export function createGetUserDataUseCase(
  providerKey: string,
  operationKey = "getUserData",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<UserDataResult>(providerKey, operationKey, adapterOptions);
  const port = new UserDataDynamicAdapter(base);
  return new GetUserDataUseCase(port);
}

export async function getUserData(
  command: GetUserDataCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<UserDataResult>> {
  const uc = createGetUserDataUseCase(
    opts.provider,
    opts.operation ?? "getUserData",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

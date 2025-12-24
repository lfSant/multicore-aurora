import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { GetUserDataCommand } from "../../core/application/dto/commands/GetUserData.command";
import { GetUserDataProviderPort } from "../../core/application/ports/outbound/GetUserDataProviderPort";
import { UserDataResult } from "../../core/application/dto/results/UserData.result";

export class UserDataDynamicAdapter implements GetUserDataProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<UserDataResult>) {}

  getUserData(
    cmd: GetUserDataCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<UserDataResult>> {
    return this.base.run(cmd, http, options);
  }
}

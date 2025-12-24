import { ProviderResult } from "../../../shared/types";
import { ProviderCallConfig } from "../../../shared/http";
import { UserDataResult } from "../../dto/results/UserData.result";
import { GetUserDataCommand } from "../../dto/commands/GetUserData.command";

export interface GetUserDataProviderPort {
  getUserData(
    cmd: GetUserDataCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<UserDataResult>>;
}

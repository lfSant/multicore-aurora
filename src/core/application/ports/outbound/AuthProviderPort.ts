import { ProviderCallConfig } from "../../../shared/http";
import { AuthCoreActiveStatus } from "../../dto/results/AuthCoreActiveStatus.result";
import { AuthCoreActiveCommand } from "../../validation/auth-core-active.schema";

export interface AuthProviderPort {
  authUserActive(
    cmd: AuthCoreActiveCommand,
    http: ProviderCallConfig
  ): Promise<AuthCoreActiveStatus[]>;
}

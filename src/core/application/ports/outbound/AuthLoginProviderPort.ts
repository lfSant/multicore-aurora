import { ProviderCallConfig } from "../../../shared/http";
import { LoginCommand } from "../../../application/validation/login.schema";
import { LoginResult } from "../../../application/dto/results/Login.result";

export interface AuthLoginProviderPort {
  login(cmd: LoginCommand, http: ProviderCallConfig): Promise<LoginResult[]>;
}

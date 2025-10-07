import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { MaritalStatus } from "../../dto/results/MaritalStatus.result";

export interface MaritalStatusProviderPort {
  getMaritalStatus(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<MaritalStatus[]>>;
}

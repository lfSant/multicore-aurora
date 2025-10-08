import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ProfessionTypes } from "../../dto/results/ProfessionTypes.result";

export interface ProfessionTypesProviderPort {
  getProfessionTypes(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProfessionTypes[]>>;
}

import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { EducationTypes } from "../../dto/results/EducationTypes.result";

export interface EducationTypesProviderPort {
  getEducationTypes(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<EducationTypes[]>>;
}

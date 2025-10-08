import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { EducationTypes } from "../../core/application/dto/results/EducationTypes.result";
import { EducationTypesProviderPort } from "../../core/application/ports/outbound/EducationTypesProviderPort";

export class EducationTypesDynamicAdapter implements EducationTypesProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<EducationTypes[]>) {}

  getEducationTypes(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<EducationTypes[]>> {
    return this.base.run({}, http, options);
  }
}

import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { ProfessionTypes } from "../../core/application/dto/results/ProfessionTypes.result";
import { ProfessionTypesProviderPort } from "../../core/application/ports/outbound/ProfessionTypesProviderPort";

export class ProfessionTypesDynamicAdapter implements ProfessionTypesProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ProfessionTypes[]>) {}

  getProfessionTypes(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ProfessionTypes[]>> {
    return this.base.run({}, http, options);
  }
}
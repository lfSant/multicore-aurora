import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { MaritalStatus } from "../../core/application/dto/results/MaritalStatus.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { MaritalStatusProviderPort } from "../../core/application/ports/outbound/MaritalStatusProviderPort";

export class MaritalStatusDynamicAdapter implements MaritalStatusProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<MaritalStatus[]>) {}

  getMaritalStatus(
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<MaritalStatus[]>> {
    return this.base.run({}, http, options);
  }
}

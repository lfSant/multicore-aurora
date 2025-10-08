import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { ProfessionTypes, ProfessionTypesDynamicAdapter, ProfessionTypesUseCase } from "../..";

export function findProfessionalTypesUseCase(
  providerKey: string,
  operationKey = "getListProfessionalTypes",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ProfessionTypes[]>(providerKey, operationKey, adapterOptions);
  const port = new ProfessionTypesDynamicAdapter(base);
  return new ProfessionTypesUseCase(port);
}

export async function getListProfessionalTypes(
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ProfessionTypes[]>> {
  const uc = findProfessionalTypesUseCase(
    opts.provider,
    opts.operation ?? "getListProfessionalTypes",
    opts.adapterOptions
  );
  return uc.execute(http);
}

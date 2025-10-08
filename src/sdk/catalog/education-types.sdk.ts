import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { EducationTypes, EducationTypesDynamicAdapter, EducationTypesUseCase } from "../..";

export function findEducationTypesUseCase(
  providerKey: string,
  operationKey = "getListEducationTypes",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<EducationTypes[]>(providerKey, operationKey, adapterOptions);
  const port = new EducationTypesDynamicAdapter(base);
  return new EducationTypesUseCase(port);
}

export async function getListEducationTypes(
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<EducationTypes[]>> {
  const uc = findEducationTypesUseCase(
    opts.provider,
    opts.operation ?? "getListEducationTypes",
    opts.adapterOptions
  );
  return uc.execute(http);
}

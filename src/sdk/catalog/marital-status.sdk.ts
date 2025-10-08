import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { MaritalStatusDynamicAdapter } from "../../providers/catalog/DynamicMaritalStatusAdapter";
import { MaritalStatusUseCase } from "../../core/application/use-cases/MaritalStatus.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import type { MaritalStatus } from "../../core/application/dto/results/MaritalStatus.result";

export function findMaritalStatusUseCase(
  providerKey: string,
  operationKey = "getListMaritalStatus",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<MaritalStatus[]>(providerKey, operationKey, adapterOptions);
  const port = new MaritalStatusDynamicAdapter(base);
  return new MaritalStatusUseCase(port);
}

export async function getListMaritalStatus(
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<MaritalStatus[]>> {
  const uc = findMaritalStatusUseCase(
    opts.provider,
    opts.operation ?? "getListMaritalStatus",
    opts.adapterOptions
  );
  return uc.execute(http);
}

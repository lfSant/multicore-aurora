import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { InternalTransferCommand, InternalTransferResult, CreateInternalTransferUseCase } from "../../core";
import { InternalTransferDynamicAdapter } from "../..";

export function createInternalTransferUseCase(
  providerKey: string,
  operationKey = "internalTransfer",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<InternalTransferResult>(providerKey, operationKey, adapterOptions);
  const port = new InternalTransferDynamicAdapter(base);
  return new CreateInternalTransferUseCase(port);
}

export async function createInternalTransfer(
  command: InternalTransferCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<InternalTransferResult>> {
  const uc = createInternalTransferUseCase(
    opts.provider,
    opts.operation ?? "createInternalTransfer",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

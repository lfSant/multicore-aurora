import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { StartRiskFlowCommand, StartRiskFlowResult, StartRiskFlowUseCase } from "../../core";
import { DynamicStartRiskFlowAdapter } from "../../providers";

export function createStartRiskFlowUseCase(
  providerKey: string,
  operationKey = "startRiskFlow",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<StartRiskFlowResult>(providerKey, operationKey, adapterOptions);
  const port = new DynamicStartRiskFlowAdapter(base);
  return new StartRiskFlowUseCase(port);
}

export async function startRiskFlow(
  command: StartRiskFlowCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<StartRiskFlowResult>> {
  const uc = createStartRiskFlowUseCase(
    opts.provider,
    opts.operation ?? "startRiskFlow",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

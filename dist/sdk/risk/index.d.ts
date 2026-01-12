import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { c as StartRiskFlowUseCase, S as StartRiskFlowCommand, a as StartRiskFlowResult } from '../../StartRiskFlow.usecase-CdettNyR.js';

declare function createStartRiskFlowUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): StartRiskFlowUseCase;
declare function startRiskFlow(command: StartRiskFlowCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<StartRiskFlowResult>>;

export { createStartRiskFlowUseCase, startRiskFlow };

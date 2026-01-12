import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';
import { c as StartRiskFlowUseCase, S as StartRiskFlowCommand, a as StartRiskFlowResult } from '../../StartRiskFlow.usecase-ByGp-cm1.cjs';

declare function createStartRiskFlowUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): StartRiskFlowUseCase;
declare function startRiskFlow(command: StartRiskFlowCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<StartRiskFlowResult>>;

export { createStartRiskFlowUseCase, startRiskFlow };

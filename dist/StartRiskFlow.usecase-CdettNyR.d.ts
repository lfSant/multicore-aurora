import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface StartRiskFlowCommand {
    providerAcronym: string;
    channel: number;
    deviceIp: string;
    time: string;
    country: string;
    latitude: number;
    longitude: number;
    login?: string;
    entity?: number;
    observation?: string;
    flowSsn: string;
}

interface StartRiskFlowResult {
    success: boolean;
    message: string;
}

interface StartRiskFlowProviderPort {
    startRiskFlow(cmd: StartRiskFlowCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<StartRiskFlowResult>>;
}

declare class StartRiskFlowUseCase {
    private readonly provider;
    constructor(provider: StartRiskFlowProviderPort);
    execute(command: StartRiskFlowCommand, http: ProviderCallConfig): Promise<CanonicalResponse<StartRiskFlowResult>>;
}

export { type StartRiskFlowCommand as S, type StartRiskFlowResult as a, type StartRiskFlowProviderPort as b, StartRiskFlowUseCase as c };

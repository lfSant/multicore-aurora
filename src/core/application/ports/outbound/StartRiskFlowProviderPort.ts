import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { StartRiskFlowCommand } from "../../dto/commands/StartRiskFlow.command";
import { StartRiskFlowResult } from "../../dto/results/StartRiskFlow.result";

export interface StartRiskFlowProviderPort {
  startRiskFlow(
    cmd: StartRiskFlowCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<StartRiskFlowResult>>;
}

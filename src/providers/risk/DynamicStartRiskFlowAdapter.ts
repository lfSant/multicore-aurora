import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";
import { StartRiskFlowCommand } from "../../core/application/dto/commands/StartRiskFlow.command";
import { StartRiskFlowResult } from "../../core/application/dto/results/StartRiskFlow.result";
import { StartRiskFlowProviderPort } from "../../core/application/ports/outbound/StartRiskFlowProviderPort";

export class DynamicStartRiskFlowAdapter implements StartRiskFlowProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<StartRiskFlowResult>) {}

  startRiskFlow(
    cmd: StartRiskFlowCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<StartRiskFlowResult>> {
    return this.base.run(cmd, http, options);
  }
}

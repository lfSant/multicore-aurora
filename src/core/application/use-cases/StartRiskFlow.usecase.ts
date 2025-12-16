import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { StartRiskFlowCommand } from "../dto/commands/StartRiskFlow.command";
import { StartRiskFlowResult } from "../dto/results/StartRiskFlow.result";
import { StartRiskFlowProviderPort } from "../ports/outbound/StartRiskFlowProviderPort";
import {
  StartRiskFlowCommandSchema,
  StartRiskFlowCommandParsed,
} from "../validation/start-risk-flow.schema";

export class StartRiskFlowUseCase {
  constructor(private readonly provider: StartRiskFlowProviderPort) {}

  async execute(
    command: StartRiskFlowCommand,
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<StartRiskFlowResult>> {
    try {
      const parsed: StartRiskFlowCommandParsed =
        StartRiskFlowCommandSchema.parse(command);

      const result = await this.provider.startRiskFlow(parsed, http);

      return successResponse<StartRiskFlowResult>(result.items, {
        client: "Flujo de riesgo iniciado exitosamente",
        server: "Flujo de riesgo iniciado exitosamente",
        status: result.status,
        aditionalData: result.aditionalData,
        raw: result.raw ? [result.raw] : undefined,
      });
    } catch (e: any) {
      return errorResponse<StartRiskFlowResult>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

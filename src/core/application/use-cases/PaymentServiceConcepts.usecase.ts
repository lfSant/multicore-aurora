import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { PaymentServiceConceptsProviderPort } from "../ports/outbound/PaymentServiceConceptsProviderPort";
import { PaymentServiceConcepts } from "../dto/results/PaymentServiceConcepts.result";

export class PaymentServiceConceptsUseCase {
  constructor(private readonly provider: PaymentServiceConceptsProviderPort) {}

  async execute(
    http: ProviderCallConfig
  ): Promise<CanonicalResponse<PaymentServiceConcepts[]>> {
    try {
      const result = await this.provider.getPaymentServiceConcepts(http);
      return successResponse<PaymentServiceConcepts[]>(result.items, {
        client: "Listado de conceptos de pago de servicios obtenido correctamente.",
        server: `Servicio de ${result.provider} ejecutado correctamente.`,
        status: 200,
        raw: result.raw ? [result.raw] : undefined,
        aditionalData: result?.aditionalData || {},
      });
    } catch (e: any) {
      if (e instanceof ProviderHttpError) {
        return errorResponse<PaymentServiceConcepts[]>(
          e.clientMessage || "Obtención de conceptos de pago fallida",
          e.message,
          e.status,
          e.raw ? [e.raw] : undefined
        );
      }
      return errorResponse<PaymentServiceConcepts[]>(
        "Servicio temporalmente no disponible",
        e?.message ?? "Error desconocido",
        500
      );
    }
  }
}

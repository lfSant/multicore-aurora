import { ListCustomerProductsCommand } from "../dto/commands/ListCustomerProducts.command";
import { ConsolidatedBuckets } from "../dto/results/ConsolidatedProduct.result";
import { ConsolidatedProductsProviderPort } from "../ports/outbound/ConsolidatedProductsProviderPort";
import { ListCustomerProductsCommandSchema } from "../validation/list-customer-products.schema";
import { ProviderCallConfig } from "../../shared/http";
import { CanonicalResponse } from "../../shared/types";
import { successResponse, errorResponse } from "../../shared/envelope";
import { ProviderHttpError } from "../../shared/errors";
import { groupConsolidated } from "../utils/group-consolidated";

export class ListCustomerProductsUseCase {
    constructor(private readonly provider: ConsolidatedProductsProviderPort) { }
    async execute(
        cmd: ListCustomerProductsCommand,
        http: ProviderCallConfig,
    ): Promise<CanonicalResponse<ConsolidatedBuckets>> {
        try {
            const parsed = ListCustomerProductsCommandSchema.parse(cmd);
            const result = await this.provider.listCustomerProducts(parsed, http);
            const grouped = groupConsolidated(result.items || []);
            return successResponse<ConsolidatedBuckets>([grouped], {
                client: "Listado de productos del cliente obtenido correctamente.",
                server: `Servicio de ${result.provider} ejecutado correctamente.`,
                status: 200,
                raw: result.raw ? [result.raw] : undefined,
                aditionalData: result?.aditionalData || {},
            });
        } catch (e: any) {
            if (e instanceof ProviderHttpError) {
                return errorResponse<ConsolidatedBuckets>(
                    e.clientMessage || "No se pudo obtener el listado de productos del cliente",
                    e.message,
                    e.status,
                    e.raw ? [e.raw] : undefined
                );
            }
            return errorResponse<ConsolidatedBuckets>(
                "Servicio temporalmente no disponible",
                e?.message ?? "Error desconocido",
                500
            );
        }
    }
}
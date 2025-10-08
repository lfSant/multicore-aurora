import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import { ConsolidatedProductsDynamicAdapter } from "../../providers/product/DynamicConsolidatedProductsAdapter";
import { ListCustomerProductsUseCase } from "../../core/application/use-cases/ListCustomerProducts.usecase";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { ListCustomerProductsCommand } from "../../core/application/dto/commands/ListCustomerProducts.command";
import type { CanonicalResponse } from "../../core/shared/types";
import type { ConsolidatedProduct, ConsolidatedBuckets } from "../../core/application/dto/results/ConsolidatedProduct.result";

export function getConsolidatedProductsUseCase(
  providerKey: string,
  operationKey = "productsConsolidated",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ConsolidatedProduct>(providerKey, operationKey, adapterOptions);
  const port = new ConsolidatedProductsDynamicAdapter(base);
  return new ListCustomerProductsUseCase(port);
}

export async function listConsolidatedProducts(
  command: ListCustomerProductsCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ConsolidatedBuckets>> {
  const uc = getConsolidatedProductsUseCase(
    opts.provider,
    opts.operation ?? "productsConsolidated",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}

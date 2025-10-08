import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ConsolidatedProduct, ConsolidatedProductsProviderPort, ListCustomerProductsCommand } from "../../core";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ConsolidatedProductsDynamicAdapter implements ConsolidatedProductsProviderPort{
  constructor(private readonly base: BaseDynamicAdapter<ConsolidatedProduct>) {}

  listCustomerProducts(
    cmd: ListCustomerProductsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ConsolidatedProduct>> {
    return this.base.run(cmd, http, options);
  }
}

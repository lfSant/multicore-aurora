import { ProviderCallConfig } from "../../../shared/http";
import { ProviderResult } from "../../../shared/types";
import { ListCustomerProductsCommand } from "../../dto/commands/ListCustomerProducts.command";
import { ConsolidatedProduct } from "../../dto/results/ConsolidatedProduct.result";

export interface ConsolidatedProductsProviderPort {
  listCustomerProducts(
    cmd: ListCustomerProductsCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ConsolidatedProduct>>;
}
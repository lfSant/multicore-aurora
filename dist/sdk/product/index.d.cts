import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { c as ListCustomerProductsUseCase, L as ListCustomerProductsCommand, a as ConsolidatedBuckets } from '../../ListCustomerProducts.usecase-DLFY0kje.cjs';
import { P as ProviderCallConfig, C as CanonicalResponse } from '../../http-BkU-WJ0-.cjs';

declare function getConsolidatedProductsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCustomerProductsUseCase;
declare function listConsolidatedProducts(command: ListCustomerProductsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ConsolidatedBuckets>>;

export { getConsolidatedProductsUseCase, listConsolidatedProducts };

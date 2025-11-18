import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { c as ListCustomerProductsUseCase, L as ListCustomerProductsCommand, a as ConsolidatedBuckets } from '../../ListCustomerProducts.usecase-CLN-wEAH.js';
import { P as ProviderCallConfig, C as CanonicalResponse } from '../../http-BkU-WJ0-.js';

declare function getConsolidatedProductsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCustomerProductsUseCase;
declare function listConsolidatedProducts(command: ListCustomerProductsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ConsolidatedBuckets>>;

export { getConsolidatedProductsUseCase, listConsolidatedProducts };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { c as ListCustomerProductsUseCase, L as ListCustomerProductsCommand, a as ConsolidatedBuckets } from '../../ListCustomerProducts.usecase-D_jPHLkI.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';

declare function getConsolidatedProductsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCustomerProductsUseCase;
declare function listConsolidatedProducts(command: ListCustomerProductsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ConsolidatedBuckets>>;

export { getConsolidatedProductsUseCase, listConsolidatedProducts };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { c as ListCustomerProductsUseCase, L as ListCustomerProductsCommand, C as ConsolidatedBuckets } from '../../ListCustomerProducts.usecase-CZhSzfFO.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import '../../CoreRequestContext-C_H146tZ.js';

declare function getConsolidatedProductsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCustomerProductsUseCase;
declare function listConsolidatedProducts(command: ListCustomerProductsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ConsolidatedBuckets>>;

export { getConsolidatedProductsUseCase, listConsolidatedProducts };

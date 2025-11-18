import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { c as ListCustomerProductsUseCase, L as ListCustomerProductsCommand, a as ConsolidatedBuckets } from '../../ListCustomerProducts.usecase-CMicbZiu.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';

declare function getConsolidatedProductsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCustomerProductsUseCase;
declare function listConsolidatedProducts(command: ListCustomerProductsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ConsolidatedBuckets>>;

export { getConsolidatedProductsUseCase, listConsolidatedProducts };

import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

interface ListCustomerProductsCommand {
    clientNumber: number | string;
}

type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN';
interface ConsolidatedProduct {
    productCategory: ProductCategory;
    accountNumber?: string;
    accountType?: string;
    currency?: string;
    holdBalance?: string;
    blockedBalance?: string;
    otherBalance?: string;
    pledgedBalance?: string;
    balance?: string;
    availableBalance?: string;
    operationalTransactionsAllowed?: boolean;
    status?: string;
    signatureType?: string;
    id?: string | number;
    code?: string;
    depositType?: string;
    maturityDate?: string;
    amount?: string;
    interestCollected?: string;
    frequency?: string | null;
    financialYield?: string;
    rate?: string;
    termDays?: number;
    openDate?: string;
    installments?: number;
    loanCode?: string;
    loanType?: string;
    currentBalance?: string;
    payoffAmount?: string;
    nextDueDate?: string;
    relationshipType?: string;
}
interface ConsolidatedBuckets {
    accounts: ConsolidatedProduct[];
    timeDeposits: ConsolidatedProduct[];
    loans: ConsolidatedProduct[];
}

interface ConsolidatedProductsProviderPort {
    listCustomerProducts(cmd: ListCustomerProductsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ConsolidatedProduct>>;
}

declare class ListCustomerProductsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedProductsProviderPort);
    execute(cmd: ListCustomerProductsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ConsolidatedBuckets>>;
}

export { type ConsolidatedProduct as C, type ListCustomerProductsCommand as L, type ProductCategory as P, type ConsolidatedBuckets as a, type ConsolidatedProductsProviderPort as b, ListCustomerProductsUseCase as c };

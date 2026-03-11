import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface ListCustomerProductsCommand {
    clientNumber: number | string;
}

type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN' | 'CREDIT_CARD';
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
    currencyCode?: string;
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
    retentionTax?: string;
    totalToReceive?: string;
    branchTDCode?: string;
    branchTDName?: string;
    loanCode?: string;
    loanType?: string;
    currentBalance?: string;
    payoffAmount?: string;
    nextDueDate?: string;
    relationshipType?: string;
    originalAmount?: string;
    creationDate?: string;
    daysPastDue?: number;
    loanStatus?: string;
    loanStatusDescription?: string;
    numberOfInstallments?: number;
    interestRate?: string;
    branchCode?: string;
    branchName?: string;
    creditCardDescription?: string;
    creditCardNumber?: string;
    creditCardLimit?: string;
    creditCardBalance?: string;
    creditCardAvailable?: string;
    creditCardMinimumPayment?: string;
    creditCardCutOffDate?: string;
    creditCardPaymentDate?: string;
    creditCardStatus?: string;
    creditCardCoreCode?: string;
    creditCardProductCode?: string;
    creditCardCurrencyCode?: string;
}
interface ConsolidatedBuckets {
    accounts: ConsolidatedProduct[];
    timeDeposits: ConsolidatedProduct[];
    loans: ConsolidatedProduct[];
    creditCards?: ConsolidatedProduct[];
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

export { type ConsolidatedBuckets as C, type ListCustomerProductsCommand as L, type ProductCategory as P, type ConsolidatedProduct as a, type ConsolidatedProductsProviderPort as b, ListCustomerProductsUseCase as c };

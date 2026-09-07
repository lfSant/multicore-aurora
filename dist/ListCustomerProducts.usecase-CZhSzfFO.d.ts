import { C as CoreRequestContext } from './CoreRequestContext-C_H146tZ.js';
import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

interface ListCustomerProductsCommand {
    clientNumber: number | string;
    context?: CoreRequestContext;
}

type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN' | 'CREDIT_CARD';
interface ConsolidatedProduct {
    productCategory: ProductCategory;
    accountNumber?: string;
    accountType?: string;
    accountTypeCode?: string;
    currency?: string;
    currencyCode?: string;
    holdBalance?: string;
    blockedBalance?: string;
    otherBalance?: string;
    pledgedBalance?: string;
    balance?: string;
    availableBalance?: string;
    operationalTransactionsAllowed?: boolean;
    status?: string;
    statusCode?: string;
    signatureType?: string;
    linkedDebitCards?: any[];
    id?: string | number;
    code?: string;
    depositType?: string;
    depositTypeCode?: string;
    maturityDate?: string;
    amount?: string;
    interestCollected?: string;
    interestToCollect?: string;
    frequency?: string | null;
    frequencyCode?: string;
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
    creditTypeCode?: string;
    productCode?: string;
    currentBalance?: string;
    payoffAmount?: string;
    nextDueDate?: string;
    relationshipType?: string;
    creditRelationCode?: string;
    originalAmount?: string;
    creationDate?: string;
    daysPastDue?: number;
    loanStatus?: string;
    loanStatusDescription?: string;
    numberOfInstallments?: number;
    installmentAmount?: string;
    interestRate?: string;
    legalCost?: string;
    notifications?: string;
    collectionManagement?: string;
    branchCode?: string;
    branchName?: string;
    creditCardDescription?: string;
    creditCardNumber?: string;
    cardholderName?: string;
    brand?: string;
    creditCardLimit?: string;
    creditCardBalance?: string;
    creditCardAvailable?: string;
    creditCardMinimumPayment?: string;
    creditCardCutOffDate?: string;
    creditCardPaymentDate?: string;
    paymentDueDate?: string;
    expirationDate?: string;
    statementBalance?: string;
    totalPayment?: string;
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

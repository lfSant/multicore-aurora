import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface GetPaymentServiceQueryCommand {
    referenceNumber: string;
    identifier: string;
    clientNumber: number;
}

interface PaymentServiceQueryItemResult {
    commission: string;
    description: string;
    item: string;
    priority: number;
    value: string;
    valueWithCommission: string;
}
interface PaymentServiceQueryResult {
    items: PaymentServiceQueryItemResult[];
    transactionId: string;
    identification: string;
    name: string;
}

interface PaymentServiceQueryProviderPort {
    getPaymentServiceQuery(cmd: GetPaymentServiceQueryCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentServiceQueryResult>>;
}

declare class GetPaymentServiceQueryUseCase {
    private readonly provider;
    constructor(provider: PaymentServiceQueryProviderPort);
    execute(cmd: GetPaymentServiceQueryCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PaymentServiceQueryResult>>;
}

interface ProcessPaymentServiceCommand {
    accountNumber: string;
    identifier: string;
    referenceNumber: string;
    transactionId: string;
    itemId: string;
    amountToPay: string;
    concept: string;
}

interface ProcessPaymentServiceResult {
    transactionDateTime: string;
    paymentCode: string;
    transactionCode: string;
    authorizationCode: string;
    product: string;
    traceCode: string;
    invoice: string;
    terminal: string;
    switchSequence: string;
    identification: string;
    invoiceUrl: string;
    acquirerSequence: string;
    compensationDate: string;
    xmlReceipt: string;
    receiptLines?: string[];
    receiptObject?: Record<string, string>;
}

interface ProcessPaymentServiceProviderPort {
    processPaymentService(cmd: ProcessPaymentServiceCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessPaymentServiceResult>>;
}

declare class ProcessPaymentServiceUseCase {
    private readonly provider;
    constructor(provider: ProcessPaymentServiceProviderPort);
    execute(cmd: ProcessPaymentServiceCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessPaymentServiceResult>>;
}

interface GetPaymentReversalsCommand {
    accountNumber: string;
}

interface PaymentReversalItemResult {
    sequential: number;
    name: string;
    category: string;
    reference: string;
    value: string;
    dateTime: string;
    concept: string;
}
interface PaymentReversalsResult {
    incompletePayments: PaymentReversalItemResult[];
}

interface PaymentReversalsProviderPort {
    getPaymentReversals(cmd: GetPaymentReversalsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentReversalsResult>>;
}

declare class GetPaymentReversalsUseCase {
    private readonly provider;
    constructor(provider: PaymentReversalsProviderPort);
    execute(cmd: GetPaymentReversalsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PaymentReversalsResult>>;
}

interface ProcessPaymentReversalCommand {
    accountNumber: string;
    referenceNumber: string;
    sequential: number;
    amount: string;
    concept: string;
}

interface ProcessPaymentReversalResult {
    date: string;
    transactionMessageNumber: string;
}

interface ProcessPaymentReversalProviderPort {
    processPaymentReversal(cmd: ProcessPaymentReversalCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessPaymentReversalResult>>;
}

declare class ProcessPaymentReversalUseCase {
    private readonly provider;
    constructor(provider: ProcessPaymentReversalProviderPort);
    execute(cmd: ProcessPaymentReversalCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessPaymentReversalResult>>;
}

export { type GetPaymentServiceQueryCommand as G, type PaymentServiceQueryItemResult as P, type PaymentServiceQueryResult as a, type PaymentServiceQueryProviderPort as b, GetPaymentServiceQueryUseCase as c, type ProcessPaymentServiceCommand as d, type ProcessPaymentServiceResult as e, type ProcessPaymentServiceProviderPort as f, ProcessPaymentServiceUseCase as g, type GetPaymentReversalsCommand as h, type PaymentReversalItemResult as i, type PaymentReversalsResult as j, type PaymentReversalsProviderPort as k, GetPaymentReversalsUseCase as l, type ProcessPaymentReversalCommand as m, type ProcessPaymentReversalResult as n, type ProcessPaymentReversalProviderPort as o, ProcessPaymentReversalUseCase as p };

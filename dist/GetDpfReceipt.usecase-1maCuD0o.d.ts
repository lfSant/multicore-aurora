import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

interface GetConsolidatedTimeDepositsCommand {
    clientNumber: number;
    companySequential?: number;
    isActive?: boolean;
}

interface TimeDeposit {
    sequential: number;
    code: string;
    depositType: string;
    currency: string;
    status: string;
    dueDate: string;
    amount: string;
    collectionInterestBalance: string;
    calculationInterestBalance: string;
}

interface ConsolidatedTimeDepositsProviderPort {
    getConsolidatedTimeDeposits(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<TimeDeposit[]>>;
}

declare class GetConsolidatedTimeDepositsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedTimeDepositsProviderPort);
    execute(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<TimeDeposit[]>>;
}

interface GetDepositMovementsCommand {
    depositSequential: number;
    startDate: string;
    endDate: string;
    companySequential?: number;
}

interface DepositMovement {
    date: string;
    document: string;
    transaction: string;
    amount: string;
    balance: string;
    causal: string;
    office: string;
    user: string;
}

interface DepositMovementsProviderPort {
    getDepositMovements(cmd: GetDepositMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositMovement[]>>;
}

declare class GetDepositMovementsUseCase {
    private readonly provider;
    constructor(provider: DepositMovementsProviderPort);
    execute(cmd: GetDepositMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositMovement[]>>;
}

interface DpfProductCatalog {
    productCode: number;
    description?: string;
    paymentType?: string;
    minAmount: string;
    maxAmount: string;
    minTerm: number;
    maxTerm: number;
    currency?: string;
    nominalRate?: number;
    effectiveAnnualRate?: number;
    validFromMs?: number;
    validToMs?: number;
}

interface DpfProductsCatalogProviderPort {
    getDpfProductsCatalog(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfProductCatalog>>;
}

declare class ListDpfProductsCatalogUseCase {
    private readonly provider;
    constructor(provider: DpfProductsCatalogProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<DpfProductCatalog>>;
}

interface CalculateDpfValuesCommand {
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientIdentification: string;
    clientName: string;
    username: string;
}

interface DpfPaymentSchedule {
    period: number;
    dateMs: number;
    interestAmount: string;
    taxAmount: string;
    netPaymentAmount: string;
    accumulatedAmount: string;
}
interface DpfCalculation {
    transactionStatus: boolean;
    paymentType?: string;
    principalAmount: string;
    termDays: number;
    issueDate?: string;
    maturityDate: string;
    interestRate: number;
    totalInterestAmount: string;
    monthlyInterestAmount?: string;
    taxAmount: string;
    netInterestAmount?: string;
    totalPayoutAmount: string;
    paymentSchedule?: DpfPaymentSchedule[];
}

interface DpfCalculationProviderPort {
    calculateDpfValues(cmd: CalculateDpfValuesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfCalculation>>;
}

declare class CalculateDpfValuesUseCase {
    private readonly provider;
    constructor(provider: DpfCalculationProviderPort);
    execute(cmd: CalculateDpfValuesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfCalculation>>;
}

interface CreateDpfCommand {
    accountNumber: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    interestRate: number;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientIdentification: string;
    clientName: string;
    username: string;
}

interface DpfCreation {
    transactionStatus: boolean;
    documentNumber?: number;
    principalAmount?: string;
    termDays?: number;
    productCode?: number;
    paymentType?: string;
    calculatedInterest?: string;
    interestRate?: number;
    calculatedTax?: string;
    issueDateMs?: number;
    maturityDateMs?: number;
    totalPayoutAmount?: string;
    clientIdentification?: string;
}

interface CreateDpfProviderPort {
    createDpf(cmd: CreateDpfCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfCreation>>;
}

declare class CreateDpfUseCase {
    private readonly provider;
    constructor(provider: CreateDpfProviderPort);
    execute(cmd: CreateDpfCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfCreation>>;
}

interface GetDpfReceiptCommand {
    transactionReference: string;
}

interface DpfReceipt {
    transactionStatus: boolean;
    receiptUrl: string;
}

interface DpfReceiptProviderPort {
    getDpfReceipt(cmd: GetDpfReceiptCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DpfReceipt>>;
}

declare class GetDpfReceiptUseCase {
    private readonly provider;
    constructor(provider: DpfReceiptProviderPort);
    execute(cmd: GetDpfReceiptCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DpfReceipt>>;
}

export { type CalculateDpfValuesCommand as C, type DepositMovement as D, type GetConsolidatedTimeDepositsCommand as G, ListDpfProductsCatalogUseCase as L, type TimeDeposit as T, CalculateDpfValuesUseCase as a, type ConsolidatedTimeDepositsProviderPort as b, type CreateDpfCommand as c, type CreateDpfProviderPort as d, CreateDpfUseCase as e, type DepositMovementsProviderPort as f, type DpfCalculation as g, type DpfCalculationProviderPort as h, type DpfCreation as i, type DpfPaymentSchedule as j, type DpfProductCatalog as k, type DpfProductsCatalogProviderPort as l, type DpfReceipt as m, type DpfReceiptProviderPort as n, GetConsolidatedTimeDepositsUseCase as o, type GetDepositMovementsCommand as p, GetDepositMovementsUseCase as q, type GetDpfReceiptCommand as r, GetDpfReceiptUseCase as s };

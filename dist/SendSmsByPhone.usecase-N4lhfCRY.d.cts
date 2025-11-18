import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

interface GetClientLoansCommand {
    clientNumber: number;
    companySequential?: number;
    isActive?: boolean;
}

interface ClientLoan {
    sequential: number;
    code: string;
    type: string;
    initialDebt: string;
    balance: string;
    disbursementDate: string;
    dueDate: string;
    status: string;
    installments: number;
    frequency: string;
    rate: string;
    advisor: string;
    lifeInsurance: string;
    clientName: string;
}

interface ClientLoansProviderPort {
    getClientLoans(cmd: GetClientLoansCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientLoan[]>>;
}

declare class GetClientLoansUseCase {
    private readonly provider;
    constructor(provider: ClientLoansProviderPort);
    execute(cmd: GetClientLoansCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientLoan[]>>;
}

interface GetLoanAdditionalInfoCommand {
    loanSequential: number;
}

interface LoanAdditionalInfo {
    office: string;
    officer: string;
    currentBalance: string;
    lastPaymentDate: string;
    nextDueDate: string;
    amountToCancel: string;
    overdueInstallments: number;
    overdueDays: number;
    totalInstallmentAmount: string;
    amountUpToCurrentInstallment: string;
}

interface LoanAdditionalInfoProviderPort {
    getLoanAdditionalInfo(cmd: GetLoanAdditionalInfoCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LoanAdditionalInfo>>;
}

declare class GetLoanAdditionalInfoUseCase {
    private readonly provider;
    constructor(provider: LoanAdditionalInfoProviderPort);
    execute(cmd: GetLoanAdditionalInfoCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LoanAdditionalInfo>>;
}

interface GetLoanAmortizationTableCommand {
    loanSequential: number;
    companySequential?: number;
}

interface LoanInstallment {
    status: string;
    installmentNumber: number;
    dueDate: string;
    termDays: number;
    principal: string;
    interest: string;
    lifeInsurance: string;
    other: string;
    loanBalance: string;
    totalInstallment: string;
}
interface LoanAmortizationTable {
    clientName: string;
    initialDebt: string;
    loanBalance: string;
    office: string;
    disbursementDate: string;
    creditType: string;
    dueDate: string;
    accountingRating: string;
    numberOfInstallments: number;
    applicationNumber: number;
    paymentFrequency: string;
    creditNumber: string;
    rate: string;
    tea: string;
    installments: LoanInstallment[];
}

interface LoanAmortizationTableProviderPort {
    getLoanAmortizationTable(cmd: GetLoanAmortizationTableCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LoanAmortizationTable>>;
}

declare class GetLoanAmortizationTableUseCase {
    private readonly provider;
    constructor(provider: LoanAmortizationTableProviderPort);
    execute(cmd: GetLoanAmortizationTableCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LoanAmortizationTable>>;
}

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

/**
 * Command para enviar SMS a un cliente por su identificación
 */
interface SendSmsByIdentificationCommand {
    clientIdentification: string;
    message: string;
}

/**
 * Resultado del envío de SMS por identificación
 */
interface SendSmsByIdentificationResult {
    sent: boolean;
}

interface SendSmsByIdentificationProviderPort {
    sendSms(cmd: SendSmsByIdentificationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

declare class SendSmsByIdentificationUseCase {
    private readonly provider;
    constructor(provider: SendSmsByIdentificationProviderPort);
    execute(cmd: SendSmsByIdentificationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;
}

/**
 * Command para enviar SMS a un número de teléfono
 */
interface SendSmsByPhoneCommand {
    phoneNumber: string;
    message: string;
}

interface SendSmsByPhoneProviderPort {
    sendSmsByPhone(cmd: SendSmsByPhoneCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

declare class SendSmsByPhoneUseCase {
    private readonly provider;
    constructor(provider: SendSmsByPhoneProviderPort);
    execute(cmd: SendSmsByPhoneCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;
}

export { type ClientLoan as C, type DepositMovement as D, GetClientLoansUseCase as G, type LoanAdditionalInfo as L, SendSmsByIdentificationUseCase as S, type TimeDeposit as T, type GetClientLoansCommand as a, GetLoanAdditionalInfoUseCase as b, type GetLoanAdditionalInfoCommand as c, GetLoanAmortizationTableUseCase as d, type GetLoanAmortizationTableCommand as e, type LoanAmortizationTable as f, GetConsolidatedTimeDepositsUseCase as g, type GetConsolidatedTimeDepositsCommand as h, GetDepositMovementsUseCase as i, type GetDepositMovementsCommand as j, type SendSmsByIdentificationCommand as k, type SendSmsByIdentificationResult as l, SendSmsByPhoneUseCase as m, type SendSmsByPhoneCommand as n, type ClientLoansProviderPort as o, type LoanAdditionalInfoProviderPort as p, type LoanInstallment as q, type LoanAmortizationTableProviderPort as r, type ConsolidatedTimeDepositsProviderPort as s, type DepositMovementsProviderPort as t, type SendSmsByIdentificationProviderPort as u, type SendSmsByPhoneProviderPort as v };

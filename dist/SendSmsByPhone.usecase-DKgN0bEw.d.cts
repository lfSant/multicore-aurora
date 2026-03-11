import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

interface GetClientCardsCommand {
    clientIdentification: string;
    operationType?: string;
}

interface Card {
    category?: string;
    holderName?: string;
    number?: string;
    brand?: string;
    type?: string;
    status?: string;
    coreCode?: string;
    email?: string;
    phone?: string;
    expiryDate?: string;
    identification?: string | null;
    typeId?: string | null;
    productCategory: 'CREDIT_CARD' | 'DEBIT_CARD';
}

interface ClientCardsProviderPort {
    getClientCards(cmd: GetClientCardsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Card[]>>;
}

declare class GetClientCardsUseCase {
    private readonly provider;
    constructor(provider: ClientCardsProviderPort);
    execute(cmd: GetClientCardsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Card[]>>;
}

interface GetCardDataCommand {
    cardNumber: string;
}

interface CardData {
    holderName?: string;
    phone?: string;
    email?: string;
    coreCode?: string;
}

interface CardDataProviderPort {
    getCardData(cmd: GetCardDataCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardData>>;
}

declare class GetCardDataUseCase {
    private readonly provider;
    constructor(provider: CardDataProviderPort);
    execute(cmd: GetCardDataCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardData>>;
}

interface ChangeCardPinCommand {
    clientNumber: string;
    cardCode: string;
    newPinCode: string;
    oldPinCode: string;
}

interface ChangeCardPinResult {
    success: boolean;
    message?: string;
}

interface ChangeCardPinProviderPort {
    changeCardPin(cmd: ChangeCardPinCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ChangeCardPinResult>>;
}

declare class ChangeCardPinUseCase {
    private readonly provider;
    constructor(provider: ChangeCardPinProviderPort);
    execute(cmd: ChangeCardPinCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ChangeCardPinResult>>;
}

interface GenerateCardPinCommand {
    clientNumber: string;
    cardCode: string;
}

interface GenerateCardPinResult {
    success: boolean;
    newPinCode?: string;
    message?: string;
}

interface GenerateCardPinProviderPort {
    generateCardPin(cmd: GenerateCardPinCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<GenerateCardPinResult>>;
}

declare class GenerateCardPinUseCase {
    private readonly provider;
    constructor(provider: GenerateCardPinProviderPort);
    execute(cmd: GenerateCardPinCommand, http: ProviderCallConfig): Promise<CanonicalResponse<GenerateCardPinResult>>;
}

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

export { type GetLoanAmortizationTableCommand as A, GetLoanAmortizationTableUseCase as B, type Card as C, type DepositMovement as D, type LoanAdditionalInfoProviderPort as E, type LoanAmortizationTable as F, type GenerateCardPinCommand as G, type LoanAmortizationTableProviderPort as H, type LoanInstallment as I, type SendSmsByIdentificationProviderPort as J, type SendSmsByIdentificationResult as K, type LoanAdditionalInfo as L, SendSmsByIdentificationUseCase as M, type SendSmsByPhoneCommand as N, type SendSmsByPhoneProviderPort as O, SendSmsByPhoneUseCase as P, type SendSmsByIdentificationCommand as S, type TimeDeposit as T, type CardData as a, type CardDataProviderPort as b, type ChangeCardPinCommand as c, type ChangeCardPinProviderPort as d, type ChangeCardPinResult as e, ChangeCardPinUseCase as f, type ClientCardsProviderPort as g, type ClientLoan as h, type ClientLoansProviderPort as i, type ConsolidatedTimeDepositsProviderPort as j, type DepositMovementsProviderPort as k, type GenerateCardPinProviderPort as l, type GenerateCardPinResult as m, GenerateCardPinUseCase as n, type GetCardDataCommand as o, GetCardDataUseCase as p, type GetClientCardsCommand as q, GetClientCardsUseCase as r, type GetClientLoansCommand as s, GetClientLoansUseCase as t, type GetConsolidatedTimeDepositsCommand as u, GetConsolidatedTimeDepositsUseCase as v, type GetDepositMovementsCommand as w, GetDepositMovementsUseCase as x, type GetLoanAdditionalInfoCommand as y, GetLoanAdditionalInfoUseCase as z };

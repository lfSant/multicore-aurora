import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

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
    cardCode?: string;
    identification?: string;
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
    newPinCode?: string;
}

interface GenerateCardPinResult {
    success: boolean;
    newPinCode?: string;
    message?: string;
    stateCard?: boolean;
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

interface ValidateCardPinCommand {
    identifier: string;
    pin: string;
}

interface ValidateCardPinResult {
    state: boolean;
}

interface ValidateCardPinProviderPort {
    validateCardPin(cmd: ValidateCardPinCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ValidateCardPinResult>>;
}

declare class ValidateCardPinUseCase {
    private readonly provider;
    constructor(provider: ValidateCardPinProviderPort);
    execute(cmd: ValidateCardPinCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ValidateCardPinResult>>;
}

interface GetCardMovementsCommand {
    cardCode: string;
}

interface movements {
    cardNumber: string;
    transactionCode: string;
    description: string;
    transactionDate: string;
    movementNumber: string;
    deferredBalance: string;
    transactionType: string;
    amount: string;
}
interface CardMovementsResult {
    success: boolean;
    movements: movements[];
    credits: number;
    limit: number;
    debits: number;
    available: number;
    status: string;
    paymentStatus: string;
    currentBalance: number;
    deferredBalance: number;
}

interface GetCardMovementsProviderPort {
    getCardMovements(cmd: GetCardMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardMovementsResult>>;
}

declare class GetCardMovementsUseCase {
    private readonly provider;
    constructor(provider: GetCardMovementsProviderPort);
    execute(cmd: GetCardMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardMovementsResult>>;
}

interface GetCardStatementCommand {
    cardCode: string;
    year: string;
    month: string;
}

interface CardStatementResult {
    state: boolean;
    url: string;
}

interface GetCardStatementProviderPort {
    getCardStatement(cmd: GetCardStatementCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CardStatementResult>>;
}

declare class GetCardStatementUseCase {
    private readonly provider;
    constructor(provider: GetCardStatementProviderPort);
    execute(cmd: GetCardStatementCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CardStatementResult>>;
}

interface GetDeferredCardCommand {
    clientNumber: string;
    cardCode: string;
}

interface Movements {
    cardNumber: string;
    transactionCode: string;
    description: string;
    transactionDate: string;
    movementNumber: string;
    deferredBalance: number;
    transactionType: string;
    amount: number;
}
interface DeferredCardResult {
    success: boolean;
    movements: Movements[];
    credits: number;
    limit: number;
    debits: number;
    available: number;
    currentBalance: number;
    deferredBalance: number;
    minimumDeferralAmount: number;
    deferralTerms: number[];
    deferralRate: number;
}

interface GetDeferredCardProviderPort {
    getDeferredCard(cmd: GetDeferredCardCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DeferredCardResult>>;
}

declare class GetDeferredCardUseCase {
    private readonly provider;
    constructor(provider: GetDeferredCardProviderPort);
    execute(cmd: GetDeferredCardCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DeferredCardResult>>;
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
 * Command para enviar SMS a un número de teléfono.
 * - Cores genéricos: phoneNumber + message (texto libre)
 * - Core dy-mu: phoneNumber + messageId (ID de plantilla) + parameters (sustitución)
 */
interface SendSmsByPhoneCommand {
    phoneNumber: string;
    message?: string;
    messageId?: string;
    parameters?: string[];
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

/**
 * Command para enviar un email a través del proveedor.
 * - Core dy-mu: la respuesta es XML (Entidad), el adapter parsea internamente.
 */
interface SendEmailCommand {
    recipientEmail: string;
    ccEmail?: string;
    bccEmail?: string;
    subject: string;
    body: string;
}

/**
 * Resultado del envío de email.
 */
interface SendEmailResult {
    sent: boolean;
}

interface SendEmailProviderPort {
    sendEmail(cmd: SendEmailCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SendEmailResult>>;
}

declare class SendEmailUseCase {
    private readonly provider;
    constructor(provider: SendEmailProviderPort);
    execute(cmd: SendEmailCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SendEmailResult>>;
}

interface CalculateDeferredValuesCommand {
    clientNumber: string;
    cardCode: string;
    deferralTerm: string;
    movements: Record<string, any>;
}

interface CalculateDeferredResult {
    succes: boolean;
    term: number;
    totalDefer: number;
    interest: number;
    monthlyPayment: number;
}

interface CalculateDeferredValuesProviderPort {
    calculateDeferredValues(cmd: CalculateDeferredValuesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CalculateDeferredResult>>;
}

declare class CalculateDeferredValueUseCase {
    private readonly provider;
    constructor(provider: CalculateDeferredValuesProviderPort);
    execute(cmd: CalculateDeferredValuesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CalculateDeferredResult>>;
}

interface BlockCardCommand {
    clientNumber: string;
    cardCode: string;
}

interface BlockCardResult {
    success: boolean;
    stateBlockCard?: boolean;
}

interface BlockCardProviderPort {
    blockCard(cmd: BlockCardCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<BlockCardResult>>;
}

declare class BlockCardUseCase {
    private readonly provider;
    constructor(provider: BlockCardProviderPort);
    execute(cmd: BlockCardCommand, http: ProviderCallConfig): Promise<CanonicalResponse<BlockCardResult>>;
}

interface ProcessDeferredBillingCommand {
    clientNumber: string;
    cardCode: string;
    movements: Record<string, any>;
    cvv: string;
    deferralTerm: string;
    platform: string;
    date: string;
    device: string;
    reference: string;
    concept: string;
    amount: string;
}

interface ProcessDeferredBillingResult {
    success: string;
    transactionNumber: string;
}

interface ProcessDeferredBillingProviderPort {
    processDeferredBilling(cmd: ProcessDeferredBillingCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessDeferredBillingResult>>;
}

declare class ProcessDeferredBillingUseCase {
    private readonly provider;
    constructor(provider: ProcessDeferredBillingProviderPort);
    execute(cmd: ProcessDeferredBillingCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessDeferredBillingResult>>;
}

interface ProcessCashAdvanceCommand {
    cardCode: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    amount: string;
    term: string;
    destinationAccountNumber: string;
    cardholderName: string;
    platform: string;
    date: string;
    device: string;
    reference: string;
    concept: string;
}

interface ProcessCashAdvanceResult {
    success: string;
    transactionNumber: string;
    message: string;
}

interface ProcessCashAdvanceProviderPort {
    processCashAdvance(cmd: ProcessCashAdvanceCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessCashAdvanceResult>>;
}

declare class ProcessCashAdvanceUseCase {
    private readonly provider;
    constructor(provider: ProcessCashAdvanceProviderPort);
    execute(cmd: ProcessCashAdvanceCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessCashAdvanceResult>>;
}

export { ProcessCashAdvanceUseCase as $, type GetCardStatementCommand as A, type BlockCardCommand as B, type CalculateDeferredResult as C, type DeferredCardResult as D, type GetCardStatementProviderPort as E, GetCardStatementUseCase as F, type GenerateCardPinCommand as G, type GetClientCardsCommand as H, GetClientCardsUseCase as I, type GetClientLoansCommand as J, GetClientLoansUseCase as K, type GetDeferredCardCommand as L, type GetDeferredCardProviderPort as M, GetDeferredCardUseCase as N, type GetLoanAdditionalInfoCommand as O, GetLoanAdditionalInfoUseCase as P, type GetLoanAmortizationTableCommand as Q, GetLoanAmortizationTableUseCase as R, type LoanAdditionalInfo as S, type LoanAdditionalInfoProviderPort as T, type LoanAmortizationTable as U, type LoanAmortizationTableProviderPort as V, type LoanInstallment as W, type Movements as X, type ProcessCashAdvanceCommand as Y, type ProcessCashAdvanceProviderPort as Z, type ProcessCashAdvanceResult as _, type BlockCardProviderPort as a, type ProcessDeferredBillingCommand as a0, type ProcessDeferredBillingProviderPort as a1, type ProcessDeferredBillingResult as a2, ProcessDeferredBillingUseCase as a3, type SendEmailCommand as a4, type SendEmailProviderPort as a5, type SendEmailResult as a6, SendEmailUseCase as a7, type SendSmsByIdentificationCommand as a8, type SendSmsByIdentificationProviderPort as a9, type SendSmsByIdentificationResult as aa, SendSmsByIdentificationUseCase as ab, type SendSmsByPhoneCommand as ac, type SendSmsByPhoneProviderPort as ad, SendSmsByPhoneUseCase as ae, type ValidateCardPinCommand as af, type ValidateCardPinProviderPort as ag, type ValidateCardPinResult as ah, ValidateCardPinUseCase as ai, type movements as aj, type BlockCardResult as b, BlockCardUseCase as c, CalculateDeferredValueUseCase as d, type CalculateDeferredValuesCommand as e, type CalculateDeferredValuesProviderPort as f, type Card as g, type CardData as h, type CardDataProviderPort as i, type CardMovementsResult as j, type CardStatementResult as k, type ChangeCardPinCommand as l, type ChangeCardPinProviderPort as m, type ChangeCardPinResult as n, ChangeCardPinUseCase as o, type ClientCardsProviderPort as p, type ClientLoan as q, type ClientLoansProviderPort as r, type GenerateCardPinProviderPort as s, type GenerateCardPinResult as t, GenerateCardPinUseCase as u, type GetCardDataCommand as v, GetCardDataUseCase as w, type GetCardMovementsCommand as x, type GetCardMovementsProviderPort as y, GetCardMovementsUseCase as z };

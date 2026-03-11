import { C as CanonicalResponse } from '../types-D11BfpWV.cjs';
export { P as ProviderResult } from '../types-D11BfpWV.cjs';
export { H as HttpResponse, P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { ZodError, z } from 'zod';
export { C as CheckClientActiveCommand, a as CheckClientActiveUseCase, b as ClientActiveStatus, c as ClientProfile, d as ClientProfileByNumber, e as ClientProfileByNumberProviderPort, f as ClientProfileProviderPort, g as ClientStatusProviderPort, G as GetClientProfileByNumberCommand, h as GetClientProfileByNumberUseCase, i as GetClientProfileCommand, j as GetClientProfileUseCase } from '../GetClientProfileByNumber.usecase-N6DyROjK.cjs';
export { A as AuthLogin, a as AuthLoginCommand, b as AuthLoginProviderPort, c as AuthLoginUseCase, d as AuthPrecheckCommand, e as AuthPrecheckProviderPort, f as AuthPrecheckStatus, g as AuthPrecheckUseCase, L as LoginCoreCommand, h as LoginCoreProviderPort, i as LoginCoreResult, j as LoginCoreUseCase } from '../LoginCore.usecase-AIJv6P63.cjs';
export { E as EducationTypes, a as EducationTypesProviderPort, b as EducationTypesUseCase, M as MaritalStatus, c as MaritalStatusProviderPort, d as MaritalStatusUseCase, P as PaymentServiceConcepts, e as PaymentServiceConceptsProviderPort, f as PaymentServiceConceptsUseCase, g as ProfessionTypes, h as ProfessionTypesProviderPort, i as ProfessionTypesUseCase } from '../PaymentServiceConcepts.usecase-CJpTIuJC.cjs';
export { C as ConsolidatedBuckets, a as ConsolidatedProduct, b as ConsolidatedProductsProviderPort, L as ListCustomerProductsCommand, c as ListCustomerProductsUseCase, P as ProductCategory } from '../ListCustomerProducts.usecase-BIQAplZX.cjs';
export { C as Card, a as CardData, b as CardDataProviderPort, c as ChangeCardPinCommand, d as ChangeCardPinProviderPort, e as ChangeCardPinResult, f as ChangeCardPinUseCase, g as ClientCardsProviderPort, h as ClientLoan, i as ClientLoansProviderPort, j as ConsolidatedTimeDepositsProviderPort, D as DepositMovement, k as DepositMovementsProviderPort, G as GenerateCardPinCommand, l as GenerateCardPinProviderPort, m as GenerateCardPinResult, n as GenerateCardPinUseCase, o as GetCardDataCommand, p as GetCardDataUseCase, q as GetClientCardsCommand, r as GetClientCardsUseCase, s as GetClientLoansCommand, t as GetClientLoansUseCase, u as GetConsolidatedTimeDepositsCommand, v as GetConsolidatedTimeDepositsUseCase, w as GetDepositMovementsCommand, x as GetDepositMovementsUseCase, y as GetLoanAdditionalInfoCommand, z as GetLoanAdditionalInfoUseCase, A as GetLoanAmortizationTableCommand, B as GetLoanAmortizationTableUseCase, L as LoanAdditionalInfo, E as LoanAdditionalInfoProviderPort, F as LoanAmortizationTable, H as LoanAmortizationTableProviderPort, I as LoanInstallment, S as SendSmsByIdentificationCommand, J as SendSmsByIdentificationProviderPort, K as SendSmsByIdentificationResult, M as SendSmsByIdentificationUseCase, N as SendSmsByPhoneCommand, O as SendSmsByPhoneProviderPort, P as SendSmsByPhoneUseCase, T as TimeDeposit } from '../SendSmsByPhone.usecase-DKgN0bEw.cjs';
export { A as Account, a as AccountForCausalResult, b as AccountMovement, c as AccountMovementsProviderPort, d as AccountSigner, e as AccountSignersInfo, f as AccountSignersProviderPort, C as ClientAccountByNumberProviderPort, g as ClientAccountsProviderPort, h as ConsolidatedAccountsProviderPort, i as ConsolidatedAccountsUseCase, G as GetAccountByNumberCommand, j as GetAccountByNumberUseCase, k as GetAccountMovementsCommand, l as GetAccountSignersCommand, m as GetAccountSignersUseCase, n as GetAccountsForCausalsCommand, o as GetAccountsForCausalsProviderPort, p as GetAccountsForCausalsUseCase, q as GetConsolidatedAccountsCommand, L as ListAccountMovementsUseCase, r as ListAccountsCommand, s as ListAccountsUseCase } from '../GetAccountsForCausals.usecase-DN7ZXmKW.cjs';
export { C as CreateExternalTransferUseCase, a as CreateInternalTransferUseCase, E as ExternalTransferCommand, b as ExternalTransferProviderPort, c as ExternalTransferResult, I as InternalTransferCommand, d as InternalTransferProviderPort, e as InternalTransferResult, f as ItemTransferInitialCharge, L as ListTransferInitialChargeProductsUseCase, T as TransferInitialChargeBuckets, g as TransferInitialChargeCategory, h as TransferInitialChargeProviderPort } from '../CreateExternalTransfer.usecase-CEGWfopo.cjs';
export { C as CreatePaymentOwnCardUseCase, G as GetPaymentReversalsCommand, a as GetPaymentReversalsUseCase, b as GetPaymentServiceQueryCommand, c as GetPaymentServiceQueryUseCase, P as PaymentOwnCardCommand, d as PaymentOwnCardProviderPort, e as PaymentOwnCardResult, f as PaymentReversalItemResult, g as PaymentReversalsProviderPort, h as PaymentReversalsResult, i as PaymentServiceQueryItemResult, j as PaymentServiceQueryProviderPort, k as PaymentServiceQueryResult, l as ProcessPaymentReversalCommand, m as ProcessPaymentReversalProviderPort, n as ProcessPaymentReversalResult, o as ProcessPaymentReversalUseCase, p as ProcessPaymentServiceCommand, q as ProcessPaymentServiceProviderPort, r as ProcessPaymentServiceResult, s as ProcessPaymentServiceUseCase } from '../CreatePaymentOwnCard.usecase-Cu6Gg8sn.cjs';
export { S as StartRiskFlowCommand, a as StartRiskFlowProviderPort, b as StartRiskFlowResult, c as StartRiskFlowUseCase } from '../StartRiskFlow.usecase-Cu6VL5f3.cjs';
export { V as ValidateCreditNoteCommand, a as ValidateCreditNoteProviderPort, b as ValidateCreditNoteResult, c as ValidateCreditNoteUseCase, d as ValidateDebitNoteCommand, e as ValidateDebitNoteProviderPort, f as ValidateDebitNoteResult, g as ValidateDebitNoteUseCase } from '../ValidateCreditNote.usecase-Bi3qMkD1.cjs';
export { G as GetUserBeneficiariesCommand, a as GetUserBeneficiariesProviderPort, b as GetUserBeneficiariesUseCase, c as GetUserDataCommand, d as GetUserDataProviderPort, e as GetUserDataUseCase, S as SecurityQuestion, U as UserBeneficiaryResult, f as UserDataResult } from '../GetUserBeneficiaries.usecase-DpBG63Rf.cjs';

declare function successResponse<T>(items: T[], opts?: {
    client?: string;
    server?: string;
    status?: number;
    raw?: Array<{
        headersCore: any;
        dataCore: any;
    }>;
    aditionalData?: Record<string, any>;
}): CanonicalResponse<T>;
declare function errorResponse<T = never>(clientMsg: string, serverMsg: string, status: number, raw?: Array<{
    headersCore: any;
    dataCore: any;
}>): CanonicalResponse<T>;

declare class ProviderHttpError extends Error {
    readonly status: number;
    readonly provider?: string | undefined;
    readonly raw?: {
        headersCore: any;
        dataCore: any;
        timeResponseMs?: number;
        urlRequest?: string;
        bodyRequest?: any;
        bodyReceived?: any;
        headersRequest?: any;
        paramsRequest?: any;
    } | undefined;
    readonly codeHint?: string | undefined;
    readonly clientMessage?: string | undefined;
    constructor(message: string, status: number, provider?: string | undefined, raw?: {
        headersCore: any;
        dataCore: any;
        timeResponseMs?: number;
        urlRequest?: string;
        bodyRequest?: any;
        bodyReceived?: any;
        headersRequest?: any;
        paramsRequest?: any;
    } | undefined, codeHint?: string | undefined, clientMessage?: string | undefined);
}
declare class MappingConfigError extends Error {
    details: string;
    constructor(details: string);
}

interface ErrorMessages {
    validation?: string;
    provider?: string;
    generic?: string;
}
declare function formatZodErrors(error: ZodError): string;
declare function handleUseCaseError<T>(error: unknown, messages?: ErrorMessages): CanonicalResponse<T>;

declare const parseDateTimeDDMMYYYY: (dateStr: string) => Date;
declare const isValidDateComponentsDDMMYYYY: (val: string) => boolean;
declare const parseDateTimeISO: (dateStr: string) => Date;
declare const isValidDateComponentsISO: (val: string) => boolean;
declare const parseDateOnlyISO: (dateStr: string) => Date;
declare const isValidDateOnlyISO: (val: string) => boolean;
declare const dateTimeDDMMYYYYSchema: (fieldName: string, required?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
declare const dateTimeISOSchema: (fieldName: string, required?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
declare const dateOnlyISOSchema: (fieldName: string, required?: boolean) => z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;

declare const GetClientProfileCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetClientProfileCommandParsed = z.infer<typeof GetClientProfileCommandSchema>;

declare const CheckClientActiveCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;

declare const AuthPrecheckCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    atributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    atributes?: Record<string, any> | undefined;
}, {
    username: string;
    password: string;
    atributes?: Record<string, any> | undefined;
}>;
type AuthPrecheckCommandParsed = z.infer<typeof AuthPrecheckCommandSchema>;

declare const AuthLoginCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    attributes?: Record<string, any> | undefined;
}, {
    username: string;
    password: string;
    attributes?: Record<string, any> | undefined;
}>;
type AuthLoginCommandParsed = z.infer<typeof AuthLoginCommandSchema>;

declare const LoginCoreCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
type LoginCoreCommandParsed = z.infer<typeof LoginCoreCommandSchema>;

declare const GetClientProfileByNumberCommandSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
}, {
    clientNumber: number;
}>;
type GetClientProfileByNumberCommandParsed = z.infer<typeof GetClientProfileByNumberCommandSchema>;

declare const ListCustomerProductsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
}, {
    clientNumber: string | number;
}>;
type ListCustomerProductsCommandParsed = z.infer<typeof ListCustomerProductsCommandSchema>;

declare const GetClientCardsCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    operationType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    operationType?: string | undefined;
}, {
    clientIdentification: string;
    operationType?: string | undefined;
}>;
type GetClientCardsCommandParsed = z.infer<typeof GetClientCardsCommandSchema>;

declare const GetCardDataCommandSchema: z.ZodObject<{
    cardNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cardNumber: string;
}, {
    cardNumber: string;
}>;
type GetCardDataCommandParsed = z.infer<typeof GetCardDataCommandSchema>;

declare const ChangeCardPinCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    cardCode: z.ZodString;
    newPinCode: z.ZodString;
    oldPinCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
    newPinCode: string;
    oldPinCode: string;
}, {
    clientNumber: string;
    cardCode: string;
    newPinCode: string;
    oldPinCode: string;
}>;
type ChangeCardPinCommandParsed = z.infer<typeof ChangeCardPinCommandSchema>;

declare const GenerateCardPinCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    cardCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
}, {
    clientNumber: string;
    cardCode: string;
}>;
type GenerateCardPinCommandParsed = z.infer<typeof GenerateCardPinCommandSchema>;

declare const ListAccountsCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type ListAccountsCommandParsed = z.infer<typeof ListAccountsCommandSchema>;

declare const GetAccountByNumberCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    productCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    productCode?: string | undefined;
}, {
    accountNumber: string;
    productCode?: string | undefined;
}>;
type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

declare const GetConsolidatedAccountsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    clientIdentification: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
    clientIdentification?: string | undefined;
}, {
    clientNumber: string | number;
    clientIdentification?: string | undefined;
}>;
type GetConsolidatedAccountsCommandParsed = z.infer<typeof GetConsolidatedAccountsCommandSchema>;

declare const GetAccountMovementsCommandSchema: z.ZodEffects<z.ZodObject<{
    accountNumber: z.ZodOptional<z.ZodString>;
    productCode: z.ZodOptional<z.ZodString>;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    startDate: string;
    endDate: string;
    accountNumber?: string | undefined;
    productCode?: string | undefined;
}, {
    startDate: string;
    endDate: string;
    accountNumber?: string | undefined;
    productCode?: string | undefined;
}>, {
    startDate: string;
    endDate: string;
    accountNumber?: string | undefined;
    productCode?: string | undefined;
}, {
    startDate: string;
    endDate: string;
    accountNumber?: string | undefined;
    productCode?: string | undefined;
}>;
type GetAccountMovementsCommandParsed = z.infer<typeof GetAccountMovementsCommandSchema>;

declare const GetAccountSignersCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;

declare const GetClientLoansCommandSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}>;

declare const GetLoanAdditionalInfoSchema: z.ZodObject<{
    loanSequential: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    loanSequential: number;
}, {
    loanSequential: number;
}>;

declare const GetLoanAmortizationTableSchema: z.ZodObject<{
    loanSequential: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    loanSequential: number;
    companySequential?: number | undefined;
}, {
    loanSequential: number;
    companySequential?: number | undefined;
}>;

declare const InternalTransferCommandSchema: z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    destinationAccountNumber: z.ZodString;
    amount: z.ZodString;
    concept: z.ZodString;
    platform: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
    ipTransaction: z.ZodOptional<z.ZodString>;
    identifierDevice: z.ZodOptional<z.ZodString>;
    codeReference: z.ZodOptional<z.ZodString>;
    subType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    date?: string | undefined;
    platform?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    date?: string | undefined;
    platform?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
}>;
type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;

declare const ExternalTransferCommandSchema: z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    destinationAccountNumber: z.ZodString;
    amount: z.ZodString;
    destinationIdentification: z.ZodString;
    originIdentification: z.ZodString;
    destinationName: z.ZodString;
    institutionSequential: z.ZodString;
    accountTypeCode: z.ZodString;
    concept: z.ZodString;
    platform: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>>;
    ipTransaction: z.ZodOptional<z.ZodString>;
    identifierDevice: z.ZodOptional<z.ZodString>;
    codeReference: z.ZodOptional<z.ZodString>;
    clientNumber: z.ZodOptional<z.ZodString>;
    subType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    originIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
    date?: string | undefined;
    clientNumber?: string | undefined;
    platform?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    originIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
    date?: string | undefined;
    clientNumber?: string | undefined;
    platform?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
}>;
type ExternalTransferCommandParsed = z.infer<typeof ExternalTransferCommandSchema>;

declare const GetConsolidatedTimeDepositsSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}>;

declare const GetDepositMovementsSchema: z.ZodEffects<z.ZodObject<{
    depositSequential: z.ZodNumber;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    companySequential: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}>, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}>;

declare const SendSmsByIdentificationCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    clientIdentification: string;
}, {
    message: string;
    clientIdentification: string;
}>;
type SendSmsByIdentificationCommandParsed = z.infer<typeof SendSmsByIdentificationCommandSchema>;

declare const SendSmsByPhoneCommandSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    phoneNumber: string;
}, {
    message: string;
    phoneNumber: string;
}>;
type SendSmsByPhoneCommandParsed = z.infer<typeof SendSmsByPhoneCommandSchema>;

declare const GetPaymentServiceQueryCommandSchema: z.ZodEffects<z.ZodObject<{
    referenceNumber: z.ZodOptional<z.ZodString>;
    identifier: z.ZodOptional<z.ZodString>;
    clientNumber: z.ZodOptional<z.ZodNumber>;
    parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    platform: z.ZodOptional<z.ZodString>;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodOptional<z.ZodString>;
    reference: z.ZodOptional<z.ZodString>;
    companyId: z.ZodOptional<z.ZodString>;
    serviceNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    date: string;
    clientNumber?: number | undefined;
    platform?: string | undefined;
    referenceNumber?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    clientNumber?: number | undefined;
    platform?: string | undefined;
    referenceNumber?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}>, {
    date: string;
    clientNumber?: number | undefined;
    platform?: string | undefined;
    referenceNumber?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    clientNumber?: number | undefined;
    platform?: string | undefined;
    referenceNumber?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}>;
type GetPaymentServiceQueryCommandParsed = z.infer<typeof GetPaymentServiceQueryCommandSchema>;

declare const ProcessPaymentServiceCommandSchema: z.ZodEffects<z.ZodObject<{
    accountNumber: z.ZodString;
    identifier: z.ZodOptional<z.ZodString>;
    referenceNumber: z.ZodString;
    transactionId: z.ZodOptional<z.ZodString>;
    itemId: z.ZodOptional<z.ZodString>;
    amountToPay: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    concept: z.ZodString;
    companyId: z.ZodOptional<z.ZodString>;
    serviceNumber: z.ZodOptional<z.ZodString>;
    parameters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    platform: z.ZodOptional<z.ZodString>;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    date: string;
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    amountToPay: string;
    platform?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
    transactionId?: string | undefined;
    itemId?: string | undefined;
}, {
    date: string;
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    amountToPay: string;
    platform?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
    transactionId?: string | undefined;
    itemId?: string | undefined;
}>, {
    date: string;
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    amountToPay: string;
    platform?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
    transactionId?: string | undefined;
    itemId?: string | undefined;
}, {
    date: string;
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    amountToPay: string;
    platform?: string | undefined;
    identifier?: string | undefined;
    parameters?: Record<string, any> | undefined;
    device?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
    transactionId?: string | undefined;
    itemId?: string | undefined;
}>;
type ProcessPaymentServiceCommandParsed = z.infer<typeof ProcessPaymentServiceCommandSchema>;

declare const GetPaymentReversalsCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;
type GetPaymentReversalsCommandParsed = z.infer<typeof GetPaymentReversalsCommandSchema>;

declare const ProcessPaymentReversalCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    referenceNumber: z.ZodString;
    sequential: z.ZodNumber;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    amount: string;
    concept: string;
    referenceNumber: string;
    sequential: number;
}, {
    accountNumber: string;
    amount: string;
    concept: string;
    referenceNumber: string;
    sequential: number;
}>;
type ProcessPaymentReversalCommandParsed = z.infer<typeof ProcessPaymentReversalCommandSchema>;

declare const StartRiskFlowCommandSchema: z.ZodObject<{
    providerAcronym: z.ZodString;
    channel: z.ZodNumber;
    deviceIp: z.ZodString;
    time: z.ZodString;
    country: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    login: z.ZodOptional<z.ZodString>;
    entity: z.ZodOptional<z.ZodNumber>;
    observation: z.ZodOptional<z.ZodString>;
    flowSsn: z.ZodString;
}, "strip", z.ZodTypeAny, {
    time: string;
    providerAcronym: string;
    channel: number;
    deviceIp: string;
    country: string;
    latitude: number;
    longitude: number;
    flowSsn: string;
    login?: string | undefined;
    entity?: number | undefined;
    observation?: string | undefined;
}, {
    time: string;
    providerAcronym: string;
    channel: number;
    deviceIp: string;
    country: string;
    latitude: number;
    longitude: number;
    flowSsn: string;
    login?: string | undefined;
    entity?: number | undefined;
    observation?: string | undefined;
}>;
type StartRiskFlowCommandParsed = z.infer<typeof StartRiskFlowCommandSchema>;

declare const GetAccountsForCausalsCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    documentTypeId: z.ZodOptional<z.ZodString>;
    flowSsn: z.ZodString;
}, "strip", z.ZodTypeAny, {
    flowSsn: string;
    identification: string;
    documentTypeId?: string | undefined;
}, {
    flowSsn: string;
    identification: string;
    documentTypeId?: string | undefined;
}>;
type GetAccountsForCausalsCommandParsed = z.infer<typeof GetAccountsForCausalsCommandSchema>;

declare const ValidateDebitNoteCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    accountNumber: z.ZodString;
    amount: z.ZodEffects<z.ZodString, string, string>;
    causal: z.ZodString;
    observation: z.ZodString;
    flowSsn: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    amount: string;
    observation: string;
    flowSsn: string;
    identification: string;
    causal: string;
}, {
    accountNumber: string;
    amount: string;
    observation: string;
    flowSsn: string;
    identification: string;
    causal: string;
}>;
type ValidateDebitNoteCommandParsed = z.infer<typeof ValidateDebitNoteCommandSchema>;

declare const ValidateCreditNoteCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    accountNumber: z.ZodString;
    amount: z.ZodEffects<z.ZodString, string, string>;
    causal: z.ZodString;
    observation: z.ZodString;
    flowSsn: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    amount: string;
    observation: string;
    flowSsn: string;
    identification: string;
    causal: string;
}, {
    accountNumber: string;
    amount: string;
    observation: string;
    flowSsn: string;
    identification: string;
    causal: string;
}>;
type ValidateCreditNoteCommandParsed = z.infer<typeof ValidateCreditNoteCommandSchema>;

declare const GetUserDataCommandSchema: z.ZodObject<{
    username: z.ZodString;
    channel: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    channel: string;
}, {
    username: string;
    channel: string;
}>;
type GetUserDataCommandParsed = z.infer<typeof GetUserDataCommandSchema>;

declare const GetUserBeneficiariesCommandSchema: z.ZodObject<{
    username: z.ZodString;
    channel: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    channel: string;
}, {
    username: string;
    channel: string;
}>;
type GetUserBeneficiariesCommandParsed = z.infer<typeof GetUserBeneficiariesCommandSchema>;

declare const PaymentOwnCardCommandSchema: z.ZodEffects<z.ZodObject<{
    cardCode: z.ZodString;
    clientNumber: z.ZodString;
    accountNumber: z.ZodString;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    platform: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    clientNumber: string;
    cardCode: string;
    accountNumber: string;
    amount: string;
    concept: string;
    platform: string;
    device: string;
    reference: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    accountNumber: string;
    amount: string;
    concept: string;
    platform: string;
    device: string;
    reference: string;
}>, {
    date: string;
    clientNumber: string;
    cardCode: string;
    accountNumber: string;
    amount: string;
    concept: string;
    platform: string;
    device: string;
    reference: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    accountNumber: string;
    amount: string;
    concept: string;
    platform: string;
    device: string;
    reference: string;
}>;
type PaymentOwnCardParsed = z.infer<typeof PaymentOwnCardCommandSchema>;

export { type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, CanonicalResponse, type ChangeCardPinCommandParsed, ChangeCardPinCommandSchema, CheckClientActiveCommandSchema, type ErrorMessages, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type GenerateCardPinCommandParsed, GenerateCardPinCommandSchema, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, GetAccountSignersCommandSchema, type GetAccountsForCausalsCommandParsed, GetAccountsForCausalsCommandSchema, type GetCardDataCommandParsed, GetCardDataCommandSchema, type GetClientCardsCommandParsed, GetClientCardsCommandSchema, GetClientLoansCommandSchema, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, GetConsolidatedTimeDepositsSchema, GetDepositMovementsSchema, GetLoanAdditionalInfoSchema, GetLoanAmortizationTableSchema, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, type GetUserBeneficiariesCommandParsed, GetUserBeneficiariesCommandSchema, type GetUserDataCommandParsed, GetUserDataCommandSchema, type InternalTransferCommandParsed, InternalTransferCommandSchema, type ListAccountsCommandParsed, ListAccountsCommandSchema, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, type LoginCoreCommandParsed, LoginCoreCommandSchema, MappingConfigError, PaymentOwnCardCommandSchema, type PaymentOwnCardParsed, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, ProviderHttpError, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, type StartRiskFlowCommandParsed, StartRiskFlowCommandSchema, type ValidateCreditNoteCommandParsed, ValidateCreditNoteCommandSchema, type ValidateDebitNoteCommandParsed, ValidateDebitNoteCommandSchema, dateOnlyISOSchema, dateTimeDDMMYYYYSchema, dateTimeISOSchema, errorResponse, formatZodErrors, handleUseCaseError, isValidDateComponentsDDMMYYYY, isValidDateComponentsISO, isValidDateOnlyISO, parseDateOnlyISO, parseDateTimeDDMMYYYY, parseDateTimeISO, successResponse };

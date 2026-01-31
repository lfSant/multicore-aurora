import { C as CanonicalResponse } from '../types-D11BfpWV.js';
export { P as ProviderResult } from '../types-D11BfpWV.js';
export { H as HttpResponse, P as ProviderCallConfig } from '../http-CRaj6wih.js';
export { c as CheckClientActiveCommand, f as CheckClientActiveUseCase, d as ClientActiveStatus, C as ClientProfile, h as ClientProfileByNumber, i as ClientProfileByNumberProviderPort, a as ClientProfileProviderPort, e as ClientStatusProviderPort, g as GetClientProfileByNumberCommand, j as GetClientProfileByNumberUseCase, G as GetClientProfileCommand, b as GetClientProfileUseCase } from '../GetClientProfileByNumber.usecase-oTJdRTvT.js';
import { z } from 'zod';
export { e as AuthLogin, d as AuthLoginCommand, f as AuthLoginProviderPort, g as AuthLoginUseCase, A as AuthPrecheckCommand, b as AuthPrecheckProviderPort, a as AuthPrecheckStatus, c as AuthPrecheckUseCase } from '../AuthLogin.usecase-C8-yHSyH.js';
export { E as EducationTypes, c as EducationTypesProviderPort, d as EducationTypesUseCase, M as MaritalStatus, a as MaritalStatusProviderPort, b as MaritalStatusUseCase, g as PaymentServiceConcepts, h as PaymentServiceConceptsProviderPort, i as PaymentServiceConceptsUseCase, P as ProfessionTypes, e as ProfessionTypesProviderPort, f as ProfessionTypesUseCase } from '../PaymentServiceConcepts.usecase-Cz69s2JW.js';
export { a as ConsolidatedBuckets, C as ConsolidatedProduct, b as ConsolidatedProductsProviderPort, L as ListCustomerProductsCommand, c as ListCustomerProductsUseCase, P as ProductCategory } from '../ListCustomerProducts.usecase-D_jPHLkI.js';
export { A as Account, q as AccountForCausalResult, h as AccountMovement, i as AccountMovementsProviderPort, l as AccountSigner, m as AccountSignersInfo, n as AccountSignersProviderPort, b as ClientAccountByNumberProviderPort, C as ClientAccountsProviderPort, e as ConsolidatedAccountsProviderPort, f as ConsolidatedAccountsUseCase, G as GetAccountByNumberCommand, c as GetAccountByNumberUseCase, g as GetAccountMovementsCommand, k as GetAccountSignersCommand, o as GetAccountSignersUseCase, p as GetAccountsForCausalsCommand, r as GetAccountsForCausalsProviderPort, s as GetAccountsForCausalsUseCase, d as GetConsolidatedAccountsCommand, j as ListAccountMovementsUseCase, L as ListAccountsCommand, a as ListAccountsUseCase } from '../GetAccountsForCausals.usecase-C3JbIbUb.js';
export { C as ClientLoan, a as ClientLoansProviderPort, l as ConsolidatedTimeDepositsProviderPort, D as DepositMovement, o as DepositMovementsProviderPort, G as GetClientLoansCommand, b as GetClientLoansUseCase, k as GetConsolidatedTimeDepositsCommand, m as GetConsolidatedTimeDepositsUseCase, n as GetDepositMovementsCommand, p as GetDepositMovementsUseCase, c as GetLoanAdditionalInfoCommand, e as GetLoanAdditionalInfoUseCase, f as GetLoanAmortizationTableCommand, j as GetLoanAmortizationTableUseCase, L as LoanAdditionalInfo, d as LoanAdditionalInfoProviderPort, h as LoanAmortizationTable, i as LoanAmortizationTableProviderPort, g as LoanInstallment, S as SendSmsByIdentificationCommand, r as SendSmsByIdentificationProviderPort, q as SendSmsByIdentificationResult, s as SendSmsByIdentificationUseCase, t as SendSmsByPhoneCommand, u as SendSmsByPhoneProviderPort, v as SendSmsByPhoneUseCase, T as TimeDeposit } from '../SendSmsByPhone.usecase-u2oxDfX1.js';
export { h as CreateExternalTransferUseCase, C as CreateInternalTransferUseCase, E as ExternalTransferCommand, g as ExternalTransferProviderPort, f as ExternalTransferResult, c as InternalTransferCommand, e as InternalTransferProviderPort, d as InternalTransferResult, I as ItemTransferInitialCharge, L as ListTransferInitialChargeProductsUseCase, a as TransferInitialChargeBuckets, T as TransferInitialChargeCategory, b as TransferInitialChargeProviderPort } from '../CreateExternalTransfer.usecase-BABLrVfK.js';
export { h as GetPaymentReversalsCommand, l as GetPaymentReversalsUseCase, G as GetPaymentServiceQueryCommand, c as GetPaymentServiceQueryUseCase, i as PaymentReversalItemResult, k as PaymentReversalsProviderPort, j as PaymentReversalsResult, P as PaymentServiceQueryItemResult, b as PaymentServiceQueryProviderPort, a as PaymentServiceQueryResult, m as ProcessPaymentReversalCommand, o as ProcessPaymentReversalProviderPort, n as ProcessPaymentReversalResult, p as ProcessPaymentReversalUseCase, d as ProcessPaymentServiceCommand, f as ProcessPaymentServiceProviderPort, e as ProcessPaymentServiceResult, g as ProcessPaymentServiceUseCase } from '../ProcessPaymentReversal.usecase-mXT-4tQN.js';
export { S as StartRiskFlowCommand, b as StartRiskFlowProviderPort, a as StartRiskFlowResult, c as StartRiskFlowUseCase } from '../StartRiskFlow.usecase-CdettNyR.js';
export { d as ValidateCreditNoteCommand, f as ValidateCreditNoteProviderPort, e as ValidateCreditNoteResult, g as ValidateCreditNoteUseCase, V as ValidateDebitNoteCommand, b as ValidateDebitNoteProviderPort, a as ValidateDebitNoteResult, c as ValidateDebitNoteUseCase } from '../ValidateCreditNote.usecase-CTXenlr5.js';
export { c as GetUserBeneficiariesCommand, e as GetUserBeneficiariesProviderPort, f as GetUserBeneficiariesUseCase, G as GetUserDataCommand, a as GetUserDataProviderPort, b as GetUserDataUseCase, S as SecurityQuestion, d as UserBeneficiaryResult, U as UserDataResult } from '../GetUserBeneficiaries.usecase-Bp1d_-63.js';

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
        headersRequest?: any;
        paramsRequest?: any;
    } | undefined, codeHint?: string | undefined, clientMessage?: string | undefined);
}
declare class MappingConfigError extends Error {
    details: string;
    constructor(details: string);
}

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
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
}, {
    clientNumber: string | number;
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
    date: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    device: z.ZodOptional<z.ZodString>;
    codeReference: z.ZodOptional<z.ZodString>;
    subType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    date?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    date?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
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
    date: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    device: z.ZodOptional<z.ZodString>;
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
    device?: string | undefined;
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
    device?: string | undefined;
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

declare const GetDepositMovementsSchema: z.ZodObject<{
    depositSequential: z.ZodNumber;
    startDate: z.ZodString;
    endDate: z.ZodString;
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

declare const GetPaymentServiceQueryCommandSchema: z.ZodObject<{
    referenceNumber: z.ZodString;
    identifier: z.ZodString;
    clientNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    referenceNumber: string;
    identifier: string;
}, {
    clientNumber: number;
    referenceNumber: string;
    identifier: string;
}>;
type GetPaymentServiceQueryCommandParsed = z.infer<typeof GetPaymentServiceQueryCommandSchema>;

declare const ProcessPaymentServiceCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    identifier: z.ZodString;
    referenceNumber: z.ZodString;
    transactionId: z.ZodString;
    itemId: z.ZodString;
    amountToPay: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: string;
}, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: string;
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

export { type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, CanonicalResponse, CheckClientActiveCommandSchema, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, GetAccountSignersCommandSchema, type GetAccountsForCausalsCommandParsed, GetAccountsForCausalsCommandSchema, GetClientLoansCommandSchema, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, GetConsolidatedTimeDepositsSchema, GetDepositMovementsSchema, GetLoanAdditionalInfoSchema, GetLoanAmortizationTableSchema, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, type GetUserBeneficiariesCommandParsed, GetUserBeneficiariesCommandSchema, type GetUserDataCommandParsed, GetUserDataCommandSchema, type InternalTransferCommandParsed, InternalTransferCommandSchema, type ListAccountsCommandParsed, ListAccountsCommandSchema, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, MappingConfigError, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, ProviderHttpError, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, type StartRiskFlowCommandParsed, StartRiskFlowCommandSchema, type ValidateCreditNoteCommandParsed, ValidateCreditNoteCommandSchema, type ValidateDebitNoteCommandParsed, ValidateDebitNoteCommandSchema, errorResponse, successResponse };

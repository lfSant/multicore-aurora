import { C as CanonicalResponse } from '../http-BkU-WJ0-.js';
export { H as HttpResponse, P as ProviderCallConfig, a as ProviderResult } from '../http-BkU-WJ0-.js';
export { c as CheckClientActiveCommand, f as CheckClientActiveUseCase, d as ClientActiveStatus, C as ClientProfile, h as ClientProfileByNumber, i as ClientProfileByNumberProviderPort, a as ClientProfileProviderPort, e as ClientStatusProviderPort, g as GetClientProfileByNumberCommand, j as GetClientProfileByNumberUseCase, G as GetClientProfileCommand, b as GetClientProfileUseCase } from '../GetClientProfileByNumber.usecase-DKpqyzKU.js';
import { z } from 'zod';
export { e as AuthLogin, d as AuthLoginCommand, f as AuthLoginProviderPort, g as AuthLoginUseCase, A as AuthPrecheckCommand, b as AuthPrecheckProviderPort, a as AuthPrecheckStatus, c as AuthPrecheckUseCase } from '../AuthLogin.usecase-BtQeC9Mz.js';
export { E as EducationTypes, c as EducationTypesProviderPort, d as EducationTypesUseCase, M as MaritalStatus, a as MaritalStatusProviderPort, b as MaritalStatusUseCase, g as PaymentServiceConcepts, h as PaymentServiceConceptsProviderPort, i as PaymentServiceConceptsUseCase, P as ProfessionTypes, e as ProfessionTypesProviderPort, f as ProfessionTypesUseCase } from '../PaymentServiceConcepts.usecase-C3a7xcrw.js';
export { a as ConsolidatedBuckets, C as ConsolidatedProduct, b as ConsolidatedProductsProviderPort, L as ListCustomerProductsCommand, c as ListCustomerProductsUseCase, P as ProductCategory } from '../ListCustomerProducts.usecase-CLN-wEAH.js';
export { A as Account, h as AccountMovement, i as AccountMovementsProviderPort, l as AccountSigner, m as AccountSignersInfo, n as AccountSignersProviderPort, b as ClientAccountByNumberProviderPort, C as ClientAccountsProviderPort, e as ConsolidatedAccountsProviderPort, f as ConsolidatedAccountsUseCase, G as GetAccountByNumberCommand, c as GetAccountByNumberUseCase, g as GetAccountMovementsCommand, k as GetAccountSignersCommand, o as GetAccountSignersUseCase, d as GetConsolidatedAccountsCommand, j as ListAccountMovementsUseCase, L as ListAccountsCommand, a as ListAccountsUseCase } from '../GetAccountSigners.usecase-7s_DhXo2.js';
export { C as ClientLoan, o as ClientLoansProviderPort, s as ConsolidatedTimeDepositsProviderPort, D as DepositMovement, t as DepositMovementsProviderPort, a as GetClientLoansCommand, G as GetClientLoansUseCase, h as GetConsolidatedTimeDepositsCommand, g as GetConsolidatedTimeDepositsUseCase, j as GetDepositMovementsCommand, i as GetDepositMovementsUseCase, c as GetLoanAdditionalInfoCommand, b as GetLoanAdditionalInfoUseCase, e as GetLoanAmortizationTableCommand, d as GetLoanAmortizationTableUseCase, L as LoanAdditionalInfo, p as LoanAdditionalInfoProviderPort, f as LoanAmortizationTable, r as LoanAmortizationTableProviderPort, q as LoanInstallment, k as SendSmsByIdentificationCommand, u as SendSmsByIdentificationProviderPort, l as SendSmsByIdentificationResult, S as SendSmsByIdentificationUseCase, n as SendSmsByPhoneCommand, v as SendSmsByPhoneProviderPort, m as SendSmsByPhoneUseCase, T as TimeDeposit } from '../SendSmsByPhone.usecase-CQHlX8i2.js';
export { h as CreateExternalTransferUseCase, C as CreateInternalTransferUseCase, E as ExternalTransferCommand, g as ExternalTransferProviderPort, f as ExternalTransferResult, c as InternalTransferCommand, e as InternalTransferProviderPort, d as InternalTransferResult, I as ItemTransferInitialCharge, L as ListTransferInitialChargeProductsUseCase, a as TransferInitialChargeBuckets, T as TransferInitialChargeCategory, b as TransferInitialChargeProviderPort } from '../CreateExternalTransfer.usecase-CzUSoYQ8.js';
export { h as GetPaymentReversalsCommand, l as GetPaymentReversalsUseCase, G as GetPaymentServiceQueryCommand, c as GetPaymentServiceQueryUseCase, i as PaymentReversalItemResult, k as PaymentReversalsProviderPort, j as PaymentReversalsResult, P as PaymentServiceQueryItemResult, b as PaymentServiceQueryProviderPort, a as PaymentServiceQueryResult, m as ProcessPaymentReversalCommand, o as ProcessPaymentReversalProviderPort, n as ProcessPaymentReversalResult, p as ProcessPaymentReversalUseCase, d as ProcessPaymentServiceCommand, f as ProcessPaymentServiceProviderPort, e as ProcessPaymentServiceResult, g as ProcessPaymentServiceUseCase } from '../ProcessPaymentReversal.usecase-51PcHKTg.js';

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
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
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

declare const GetAccountMovementsCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    startDate: string;
    endDate: string;
}, {
    accountNumber: string;
    startDate: string;
    endDate: string;
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
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
}>;
type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;

declare const ExternalTransferCommandSchema: z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    destinationAccountNumber: z.ZodString;
    amount: z.ZodString;
    destinationIdentification: z.ZodString;
    destinationName: z.ZodString;
    institutionSequential: z.ZodString;
    accountTypeCode: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
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
    clientIdentification: string;
    message: string;
}, {
    clientIdentification: string;
    message: string;
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
    amountToPay: z.ZodNumber;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: number;
}, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: number;
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
    amount: z.ZodNumber;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    amount: number;
    concept: string;
    referenceNumber: string;
    sequential: number;
}, {
    accountNumber: string;
    amount: number;
    concept: string;
    referenceNumber: string;
    sequential: number;
}>;
type ProcessPaymentReversalCommandParsed = z.infer<typeof ProcessPaymentReversalCommandSchema>;

export { type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, CanonicalResponse, CheckClientActiveCommandSchema, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, GetAccountSignersCommandSchema, GetClientLoansCommandSchema, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, GetConsolidatedTimeDepositsSchema, GetDepositMovementsSchema, GetLoanAdditionalInfoSchema, GetLoanAmortizationTableSchema, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, type InternalTransferCommandParsed, InternalTransferCommandSchema, type ListAccountsCommandParsed, ListAccountsCommandSchema, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, MappingConfigError, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, ProviderHttpError, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, errorResponse, successResponse };

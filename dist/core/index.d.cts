import { C as CanonicalResponse, P as ProviderResult } from '../types-D11BfpWV.cjs';
import { P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
export { H as HttpResponse } from '../http-CRaj6wih.cjs';
import { ZodError, z } from 'zod';
export { C as CheckClientActiveCommand, a as CheckClientActiveUseCase, b as CivilRegistryData, c as CivilRegistryDataProviderPort, d as ClientActiveStatus, e as ClientProfile, f as ClientProfileByNumber, g as ClientProfileByNumberProviderPort, h as ClientProfileProviderPort, i as ClientStatusProviderPort, G as GetCivilRegistryDataCommand, j as GetCivilRegistryDataUseCase, k as GetClientProfileByNumberCommand, l as GetClientProfileByNumberUseCase, m as GetClientProfileCommand, n as GetClientProfileUseCase } from '../GetCivilRegistryData.usecase-DYL12dkv.cjs';
export { A as AuthLogin, a as AuthLoginCommand, b as AuthLoginProviderPort, c as AuthLoginUseCase, d as AuthPrecheckCommand, e as AuthPrecheckProviderPort, f as AuthPrecheckStatus, g as AuthPrecheckUseCase, B as BlockUser, h as BlockUserCommand, i as BlockUserProviderPort, j as BlockUserUseCase, C as ChangePassword, k as ChangePasswordCommand, l as ChangePasswordProviderPort, m as ChangePasswordUseCase, L as LoginCoreCommand, n as LoginCoreProviderPort, o as LoginCoreResult, p as LoginCoreUseCase, R as RegisterCredentials, q as RegisterCredentialsCommand, r as RegisterCredentialsProviderPort, s as RegisterCredentialsUseCase, t as ResetPassword, u as ResetPasswordCommand, v as ResetPasswordProviderPort, w as ResetPasswordUseCase, x as ResetUser, y as ResetUserCommand, z as ResetUserProviderPort, D as ResetUserUseCase, U as UnblockUser, E as UnblockUserCommand, F as UnblockUserProviderPort, G as UnblockUserUseCase, V as ValidateUsername, H as ValidateUsernameCommand, I as ValidateUsernameProviderPort, J as ValidateUsernameUseCase } from '../ResetUser.usecase-Drbap4cS.cjs';
export { C as CatalogFitItem, a as CatalogFitProviderPort, E as EducationTypes, b as EducationTypesProviderPort, c as EducationTypesUseCase, G as GetCatalogFitCommand, d as GetCatalogFitUseCase, M as MaritalStatus, e as MaritalStatusProviderPort, f as MaritalStatusUseCase, P as PaymentServiceConcepts, g as PaymentServiceConceptsProviderPort, h as PaymentServiceConceptsUseCase, i as ProfessionTypes, j as ProfessionTypesProviderPort, k as ProfessionTypesUseCase } from '../PaymentServiceConcepts.usecase-nkGZKv87.cjs';
export { C as ConsolidatedBuckets, a as ConsolidatedProduct, b as ConsolidatedProductsProviderPort, L as ListCustomerProductsCommand, c as ListCustomerProductsUseCase, P as ProductCategory } from '../ListCustomerProducts.usecase-BIQAplZX.cjs';
export { B as BlockCardCommand, a as BlockCardProviderPort, b as BlockCardResult, c as BlockCardUseCase, C as CalculateDeferredResult, d as CalculateDeferredValueUseCase, e as CalculateDeferredValuesCommand, f as CalculateDeferredValuesProviderPort, g as Card, h as CardData, i as CardDataProviderPort, j as CardMovementsResult, k as CardStatementResult, l as ChangeCardPinCommand, m as ChangeCardPinProviderPort, n as ChangeCardPinResult, o as ChangeCardPinUseCase, p as ClientCardsProviderPort, q as ClientLoan, r as ClientLoansProviderPort, D as DeferredCardResult, G as GenerateCardPinCommand, s as GenerateCardPinProviderPort, t as GenerateCardPinResult, u as GenerateCardPinUseCase, v as GetCardDataCommand, w as GetCardDataUseCase, x as GetCardMovementsCommand, y as GetCardMovementsProviderPort, z as GetCardMovementsUseCase, A as GetCardStatementCommand, E as GetCardStatementProviderPort, F as GetCardStatementUseCase, H as GetClientCardsCommand, I as GetClientCardsUseCase, J as GetClientLoansCommand, K as GetClientLoansUseCase, L as GetDeferredCardCommand, M as GetDeferredCardProviderPort, N as GetDeferredCardUseCase, O as GetLoanAdditionalInfoCommand, P as GetLoanAdditionalInfoUseCase, Q as GetLoanAmortizationTableCommand, R as GetLoanAmortizationTableUseCase, S as LoanAdditionalInfo, T as LoanAdditionalInfoProviderPort, U as LoanAmortizationTable, V as LoanAmortizationTableProviderPort, W as LoanInstallment, X as Movements, Y as ProcessCashAdvanceCommand, Z as ProcessCashAdvanceProviderPort, _ as ProcessCashAdvanceResult, $ as ProcessCashAdvanceUseCase, a0 as ProcessDeferredBillingCommand, a1 as ProcessDeferredBillingProviderPort, a2 as ProcessDeferredBillingResult, a3 as ProcessDeferredBillingUseCase, a4 as SendEmailCommand, a5 as SendEmailProviderPort, a6 as SendEmailResult, a7 as SendEmailUseCase, a8 as SendSmsByIdentificationCommand, a9 as SendSmsByIdentificationProviderPort, aa as SendSmsByIdentificationResult, ab as SendSmsByIdentificationUseCase, ac as SendSmsByPhoneCommand, ad as SendSmsByPhoneProviderPort, ae as SendSmsByPhoneUseCase, af as ValidateCardPinCommand, ag as ValidateCardPinProviderPort, ah as ValidateCardPinResult, ai as ValidateCardPinUseCase, aj as movements } from '../ProcessCashAdvance.usecase-cgVwV9RN.cjs';
export { A as Account, a as AccountMovement, b as AccountMovementsProviderPort, c as AccountPlusCreation, d as AccountPlusCreationProviderPort, e as AccountPlusDocuments, f as AccountPlusDocumentsProviderPort, g as AccountPlusValidation, h as AccountPlusValidationProviderPort, i as AccountSigner, j as AccountSignersInfo, k as AccountSignersProviderPort, C as ClientAccountByNumberProviderPort, l as ClientAccountsProviderPort, m as ConsolidatedAccountsProviderPort, n as ConsolidatedAccountsUseCase, o as CreateAccountPlusCommand, p as CreateAccountPlusUseCase, F as FiscalResidence, q as FiscalResidenceData, r as FiscalResidenceItem, s as FiscalResidenceProviderPort, t as FiscalResidenceQueryProviderPort, u as FiscalResidenceSubmission, G as GenerateAccountPlusDocumentsPdfCommand, v as GenerateAccountPlusDocumentsPdfUseCase, w as GetAccountByNumberCommand, x as GetAccountByNumberUseCase, y as GetAccountMovementsCommand, z as GetAccountSignersCommand, B as GetAccountSignersUseCase, D as GetConsolidatedAccountsCommand, E as GetFiscalResidenceCommand, H as GetFiscalResidenceUseCase, L as ListAccountMovementsUseCase, I as ListAccountsCommand, J as ListAccountsUseCase, P as PepsData, K as PepsInformationProviderPort, M as PepsInformationSubmission, S as SubmitFiscalResidenceCommand, N as SubmitFiscalResidenceUseCase, O as SubmitPepsInformationCommand, Q as SubmitPepsInformationUseCase, V as ValidateCreateAccountPlusCommand, R as ValidateCreateAccountPlusUseCase } from '../GenerateAccountPlusDocumentsPdf.usecase-s00kBqwP.cjs';
export { C as CreateExternalTransferUseCase, a as CreateInternalTransferUseCase, E as ExternalTransferCommand, b as ExternalTransferProviderPort, c as ExternalTransferResult, I as InternalTransferCommand, d as InternalTransferProviderPort, e as InternalTransferResult, f as ItemTransferInitialCharge, L as ListTransferInitialChargeProductsUseCase, T as TransferInitialChargeBuckets, g as TransferInitialChargeCategory, h as TransferInitialChargeProviderPort } from '../CreateExternalTransfer.usecase-CHBz7xU8.cjs';
export { A as AddressCity, a as AddressCountry, b as AddressProvince, B as BirthCity, c as BirthCountry, C as CalculateDpfValuesCommand, d as CalculateDpfValuesUseCase, e as CityCatalog, f as ConsolidatedTimeDepositsProviderPort, g as CountryCatalog, h as CountryOfResidenceList, i as CreateDpfCommand, j as CreateDpfProviderPort, k as CreateDpfUseCase, D as DepositMovement, l as DepositMovementsProviderPort, m as DpfCalculation, n as DpfCalculationProviderPort, o as DpfCreation, p as DpfPaymentSchedule, q as DpfProductCatalog, r as DpfProductsCatalogProviderPort, s as DpfReceipt, t as DpfReceiptProviderPort, F as FiscalResidenceList, G as GetConsolidatedTimeDepositsCommand, u as GetConsolidatedTimeDepositsUseCase, v as GetDepositMovementsCommand, w as GetDepositMovementsUseCase, x as GetDpfReceiptCommand, y as GetDpfReceiptUseCase, z as GetSelfCertificationDataCommand, L as ListDpfProductsCatalogUseCase, P as PersonIdentification, E as ProvinceCatalog, R as ResidenceAddress, S as SaveSelfCertificationDataCommand, H as SaveSelfCertificationDataProviderPort, I as SaveSelfCertificationDataResult, J as SaveSelfCertificationDataUseCase, K as SelfCertificationData, M as SelfCertificationDataProviderPort, N as SelfCertificationDataResult, O as SelfCertificationDataUseCase, T as TimeDeposit } from '../SaveSelfCertificationData.usecase-B6nmI7sV.cjs';
export { C as CreatePaymentOwnCardUseCase, G as GetPaymentReversalsCommand, a as GetPaymentReversalsUseCase, b as GetPaymentServiceQueryCommand, c as GetPaymentServiceQueryUseCase, P as PaymentOwnCardCommand, d as PaymentOwnCardProviderPort, e as PaymentOwnCardResult, f as PaymentReversalItemResult, g as PaymentReversalsProviderPort, h as PaymentReversalsResult, i as PaymentServiceQueryItemResult, j as PaymentServiceQueryProviderPort, k as PaymentServiceQueryResult, l as ProcessPaymentReversalCommand, m as ProcessPaymentReversalProviderPort, n as ProcessPaymentReversalResult, o as ProcessPaymentReversalUseCase, p as ProcessPaymentServiceCommand, q as ProcessPaymentServiceProviderPort, r as ProcessPaymentServiceResult, s as ProcessPaymentServiceUseCase } from '../CreatePaymentOwnCard.usecase-Cu6Gg8sn.cjs';
export { A as AccountForCausalResult, C as CausalCatalogItem, a as CausalsCatalogProviderPort, b as CreateCreditNoteCommand, c as CreateCreditNoteProviderPort, d as CreateCreditNoteResult, e as CreateCreditNoteUseCase, f as CreateDebitNoteCommand, g as CreateDebitNoteProviderPort, h as CreateDebitNoteResult, i as CreateDebitNoteUseCase, G as GetAccountsForCausalsCommand, j as GetAccountsForCausalsProviderPort, k as GetAccountsForCausalsUseCase, L as ListCausalsCatalogUseCase, S as StartCausalFlowCommand, l as StartCausalFlowProviderPort, m as StartCausalFlowResult, n as StartCausalFlowUseCase } from '../ListCausalsCatalog.usecase-R3g99zBx.cjs';
export { G as GetUserBeneficiariesCommand, a as GetUserBeneficiariesProviderPort, b as GetUserBeneficiariesUseCase, c as GetUserDataCommand, d as GetUserDataProviderPort, e as GetUserDataUseCase, S as SecurityQuestion, U as UserAccountData, f as UserBeneficiaryResult, g as UserContactData, h as UserDataResult, i as UserPersonalData, j as UserSecurityData } from '../GetUserBeneficiaries.usecase-m99zWgXo.cjs';

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
}>, code?: string): CanonicalResponse<T>;

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
/**
 * Error de red — no se recibio respuesta HTTP del core.
 */
declare class NetworkError extends Error {
    readonly axiosCode: string;
    readonly url: string;
    readonly method: string;
    readonly elapsedMs: number;
    readonly name = "NetworkError";
    readonly errorCode: string;
    readonly description: string;
    constructor(message: string, axiosCode: string, url: string, method: string, elapsedMs: number);
}
/**
 * Error de cache (Redis).
 */
declare class CacheError extends Error {
    readonly operation: string;
    readonly name = "CacheError";
    readonly errorCode = "SRV-E5030";
    constructor(message: string, operation: string);
}
/**
 * Error de base de datos (MySQL).
 */
declare class DatabaseError extends Error {
    readonly query?: string | undefined;
    readonly name = "DatabaseError";
    readonly errorCode = "SRV-E5040";
    constructor(message: string, query?: string | undefined);
}

interface ErrorMessages {
    validation?: string;
    provider?: string;
    network?: string;
    database?: string;
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
declare const dateTimeISO8601Schema: (fieldName: string, required?: boolean) => z.ZodEffects<z.ZodString, string, string>;

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

declare const GetCivilRegistryDataCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    fingerCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identification: string;
    fingerCode: string;
}, {
    identification: string;
    fingerCode: string;
}>;
type GetCivilRegistryDataCommandParsed = z.infer<typeof GetCivilRegistryDataCommandSchema>;

declare const GetClientProfileByNumberCommandSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
}, {
    clientNumber: number;
}>;
type GetClientProfileByNumberCommandParsed = z.infer<typeof GetClientProfileByNumberCommandSchema>;

declare const GetCatalogFitCommandSchema: z.ZodObject<{
    catalogType: z.ZodString;
    filter: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filter: string;
    catalogType: string;
}, {
    filter: string;
    catalogType: string;
}>;
type GetCatalogFitCommandParsed = z.infer<typeof GetCatalogFitCommandSchema>;

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
    newPinCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
    newPinCode?: string | undefined;
}, {
    clientNumber: string;
    cardCode: string;
    newPinCode?: string | undefined;
}>;
type GenerateCardPinCommandParsed = z.infer<typeof GenerateCardPinCommandSchema>;

declare const ValidateCardPinCommandSchema: z.ZodObject<{
    identifier: z.ZodString;
    pin: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identifier: string;
    pin: string;
}, {
    identifier: string;
    pin: string;
}>;
type ValidateCardPinCommandParsed = z.infer<typeof ValidateCardPinCommandSchema>;

declare const GetCardMovementsCommandSchema: z.ZodObject<{
    cardCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    cardCode: string;
}, {
    cardCode: string;
}>;
type GetCardMovementsCommandParsed = z.infer<typeof GetCardMovementsCommandSchema>;

declare const GetCardStatementCommandSchema: z.ZodObject<{
    cardCode: z.ZodString;
    year: z.ZodString;
    month: z.ZodString;
}, "strip", z.ZodTypeAny, {
    month: string;
    year: string;
    cardCode: string;
}, {
    month: string;
    year: string;
    cardCode: string;
}>;
type GetCardStatementCommandParsed = z.infer<typeof GetCardStatementCommandSchema>;

declare const GetDeferredCardCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    cardCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
}, {
    clientNumber: string;
    cardCode: string;
}>;
type GetDeferredCardCommandParsed = z.infer<typeof GetDeferredCardCommandSchema>;

declare const GetFiscalResidenceCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetFiscalResidenceCommandParsed = z.infer<typeof GetFiscalResidenceCommandSchema>;

declare const CreateAccountPlusCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    clientCoreCode: z.ZodString;
    platform: z.ZodString;
    device: z.ZodString;
    reference: z.ZodString;
    creationDateMs: z.ZodNumber;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    username: string;
    clientCoreCode: string;
    platform: string;
    device: string;
    reference: string;
    creationDateMs: number;
}, {
    clientIdentification: string;
    username: string;
    clientCoreCode: string;
    platform: string;
    device: string;
    reference: string;
    creationDateMs: number;
}>;
type CreateAccountPlusCommandParsed = z.infer<typeof CreateAccountPlusCommandSchema>;

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

declare const ValidateCreateAccountPlusCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type ValidateCreateAccountPlusCommandParsed = z.infer<typeof ValidateCreateAccountPlusCommandSchema>;

declare const SubmitPepsInformationCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    pepsData: z.ZodObject<{
        hasPublicOffice: z.ZodBoolean;
        appointmentDateMs: z.ZodOptional<z.ZodNumber>;
        endOfTermDateMs: z.ZodOptional<z.ZodNumber>;
        positionName: z.ZodString;
        institutionName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    }, {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    pepsData: {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    };
}, {
    clientIdentification: string;
    pepsData: {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    };
}>;
type SubmitPepsInformationCommandParsed = z.infer<typeof SubmitPepsInformationCommandSchema>;

declare const SubmitFiscalResidenceCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    hasFiscalResidence: z.ZodOptional<z.ZodBoolean>;
    fiscalResidenceData: z.ZodOptional<z.ZodObject<{
        address: z.ZodString;
        countryCode: z.ZodString;
        provinceCode: z.ZodString;
        cityCode: z.ZodString;
        taxCountryCode: z.ZodString;
        taxIdentificationNumber: z.ZodString;
        taxAddress: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode: string;
        taxIdentificationNumber: string;
        taxAddress: string;
    }, {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode: string;
        taxIdentificationNumber: string;
        taxAddress: string;
    }>>;
    codeWindow: z.ZodOptional<z.ZodNumber>;
    fiscalResidenceList: z.ZodOptional<z.ZodArray<z.ZodObject<{
        countryCode: z.ZodString;
        taxId: z.ZodString;
        provinceCode: z.ZodOptional<z.ZodString>;
        cityCode: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
    }, {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    hasFiscalResidence?: boolean | undefined;
    fiscalResidenceData?: {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode: string;
        taxIdentificationNumber: string;
        taxAddress: string;
    } | undefined;
    codeWindow?: number | undefined;
    fiscalResidenceList?: {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
    }[] | undefined;
}, {
    clientIdentification: string;
    hasFiscalResidence?: boolean | undefined;
    fiscalResidenceData?: {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode: string;
        taxIdentificationNumber: string;
        taxAddress: string;
    } | undefined;
    codeWindow?: number | undefined;
    fiscalResidenceList?: {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
    }[] | undefined;
}>;
type SubmitFiscalResidenceCommandParsed = z.infer<typeof SubmitFiscalResidenceCommandSchema>;

declare const GenerateAccountPlusDocumentsPdfCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;
type GenerateAccountPlusDocumentsPdfCommandParsed = z.infer<typeof GenerateAccountPlusDocumentsPdfCommandSchema>;

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
    platformCode: z.ZodOptional<z.ZodString>;
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
    platformCode?: string | undefined;
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
    platformCode?: string | undefined;
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
    causal: z.ZodOptional<z.ZodString>;
    destinationIdentificationType: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodString>;
    platformCode: z.ZodOptional<z.ZodString>;
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
    platformCode?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
    causal?: string | undefined;
    destinationIdentificationType?: string | undefined;
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
    platformCode?: string | undefined;
    ipTransaction?: string | undefined;
    identifierDevice?: string | undefined;
    codeReference?: string | undefined;
    subType?: string | undefined;
    causal?: string | undefined;
    destinationIdentificationType?: string | undefined;
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

declare const CalculateDpfValuesCommandSchema: z.ZodObject<{
    productCode: z.ZodNumber;
    termDays: z.ZodNumber;
    investmentAmount: z.ZodString;
    transactionPlatform: z.ZodString;
    transactionDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    transactionDevice: z.ZodString;
    transactionReference: z.ZodString;
    transactionNotes: z.ZodString;
    clientIdentification: z.ZodString;
    clientName: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    username: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
}, {
    clientIdentification: string;
    username: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
}>;
type CalculateDpfValuesCommandParsed = z.infer<typeof CalculateDpfValuesCommandSchema>;

declare const CreateDpfCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    productCode: z.ZodNumber;
    termDays: z.ZodNumber;
    investmentAmount: z.ZodString;
    interestRate: z.ZodNumber;
    transactionPlatform: z.ZodString;
    transactionDate: z.ZodString;
    transactionDevice: z.ZodString;
    transactionReference: z.ZodString;
    transactionNotes: z.ZodString;
    clientIdentification: z.ZodString;
    clientName: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    username: string;
    accountNumber: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    interestRate: number;
}, {
    clientIdentification: string;
    username: string;
    accountNumber: string;
    productCode: number;
    termDays: number;
    investmentAmount: string;
    transactionPlatform: string;
    transactionDate: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    interestRate: number;
}>;
type CreateDpfCommandParsed = z.infer<typeof CreateDpfCommandSchema>;

declare const GetDpfReceiptCommandSchema: z.ZodObject<{
    transactionReference: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transactionReference: string;
}, {
    transactionReference: string;
}>;
type GetDpfReceiptCommandParsed = z.infer<typeof GetDpfReceiptCommandSchema>;

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

declare const SendSmsByPhoneCommandSchema: z.ZodEffects<z.ZodObject<{
    phoneNumber: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
    messageId: z.ZodOptional<z.ZodString>;
    parameters: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
    parameters: string[];
    message?: string | undefined;
    messageId?: string | undefined;
}, {
    phoneNumber: string;
    message?: string | undefined;
    messageId?: string | undefined;
    parameters?: string[] | undefined;
}>, {
    phoneNumber: string;
    parameters: string[];
    message?: string | undefined;
    messageId?: string | undefined;
}, {
    phoneNumber: string;
    message?: string | undefined;
    messageId?: string | undefined;
    parameters?: string[] | undefined;
}>;
type SendSmsByPhoneCommandParsed = z.infer<typeof SendSmsByPhoneCommandSchema>;

declare const SendEmailCommandSchema: z.ZodObject<{
    recipientEmail: z.ZodString;
    ccEmail: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    bccEmail: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
    recipientEmail: string;
    ccEmail: string;
    bccEmail: string;
    subject: string;
}, {
    body: string;
    recipientEmail: string;
    subject: string;
    ccEmail?: string | undefined;
    bccEmail?: string | undefined;
}>;
type SendEmailCommandParsed = z.infer<typeof SendEmailCommandSchema>;

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
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}>, {
    date: string;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
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
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    parameters?: Record<string, any> | undefined;
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
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    parameters?: Record<string, any> | undefined;
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
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    parameters?: Record<string, any> | undefined;
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
    identifier?: string | undefined;
    platform?: string | undefined;
    device?: string | undefined;
    parameters?: Record<string, any> | undefined;
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

declare const StartCausalFlowCommandSchema: z.ZodObject<{
    providerAcronym: z.ZodString;
    channel: z.ZodString;
    deviceIp: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    country: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
    username: z.ZodOptional<z.ZodString>;
    clientNumber: z.ZodOptional<z.ZodNumber>;
    observation: z.ZodOptional<z.ZodString>;
    transactionIdentifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    providerAcronym: string;
    channel: string;
    deviceIp: string;
    country: string;
    latitude: number;
    longitude: number;
    transactionIdentifier: string;
    clientNumber?: number | undefined;
    username?: string | undefined;
    observation?: string | undefined;
}, {
    date: string;
    providerAcronym: string;
    channel: string;
    deviceIp: string;
    country: string;
    latitude: number;
    longitude: number;
    transactionIdentifier: string;
    clientNumber?: number | undefined;
    username?: string | undefined;
    observation?: string | undefined;
}>;
type StartCausalFlowCommandParsed = z.infer<typeof StartCausalFlowCommandSchema>;

declare const GetAccountsForCausalsCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    documentType: z.ZodOptional<z.ZodString>;
    transactionIdentifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identification: string;
    transactionIdentifier: string;
    documentType?: string | undefined;
}, {
    identification: string;
    transactionIdentifier: string;
    documentType?: string | undefined;
}>;
type GetAccountsForCausalsCommandParsed = z.infer<typeof GetAccountsForCausalsCommandSchema>;

declare const CreateDebitNoteCommandSchema: z.ZodObject<{
    identification: z.ZodString;
    accountNumber: z.ZodString;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    causal: z.ZodString;
    observation: z.ZodString;
    transactionIdentifier: z.ZodString;
    channel: z.ZodString;
    clientPaymentId: z.ZodOptional<z.ZodString>;
    sourceAccountSequential: z.ZodOptional<z.ZodNumber>;
    destinationAccount: z.ZodOptional<z.ZodString>;
    beneficiaryIdentification: z.ZodOptional<z.ZodString>;
    beneficiaryName: z.ZodOptional<z.ZodString>;
    payerName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    identification: string;
    accountNumber: string;
    amount: string;
    causal: string;
    channel: string;
    observation: string;
    transactionIdentifier: string;
    clientPaymentId?: string | undefined;
    sourceAccountSequential?: number | undefined;
    destinationAccount?: string | undefined;
    beneficiaryIdentification?: string | undefined;
    beneficiaryName?: string | undefined;
    payerName?: string | undefined;
}, {
    identification: string;
    accountNumber: string;
    amount: string;
    causal: string;
    channel: string;
    observation: string;
    transactionIdentifier: string;
    clientPaymentId?: string | undefined;
    sourceAccountSequential?: number | undefined;
    destinationAccount?: string | undefined;
    beneficiaryIdentification?: string | undefined;
    beneficiaryName?: string | undefined;
    payerName?: string | undefined;
}>;
type CreateDebitNoteCommandParsed = z.infer<typeof CreateDebitNoteCommandSchema>;

declare const CreateCreditNoteCommandSchema: z.ZodObject<{
    channel: z.ZodString;
    causal: z.ZodString;
    transactionIdentifier: z.ZodString;
    identification: z.ZodOptional<z.ZodString>;
    accountNumber: z.ZodOptional<z.ZodString>;
    amount: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>, string | undefined, string | undefined>;
    observation: z.ZodOptional<z.ZodString>;
    originalTransactionId: z.ZodOptional<z.ZodString>;
    reversalReason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    causal: string;
    channel: string;
    transactionIdentifier: string;
    identification?: string | undefined;
    accountNumber?: string | undefined;
    amount?: string | undefined;
    observation?: string | undefined;
    originalTransactionId?: string | undefined;
    reversalReason?: string | undefined;
}, {
    causal: string;
    channel: string;
    transactionIdentifier: string;
    identification?: string | undefined;
    accountNumber?: string | undefined;
    amount?: string | undefined;
    observation?: string | undefined;
    originalTransactionId?: string | undefined;
    reversalReason?: string | undefined;
}>;
type CreateCreditNoteCommandParsed = z.infer<typeof CreateCreditNoteCommandSchema>;

declare const GetUserDataCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    channel: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    channel: string;
}, {
    username: string;
    password: string;
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
    platform: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}>, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}>;
type PaymentOwnCardParsed = z.infer<typeof PaymentOwnCardCommandSchema>;

declare const CalculateDeferredValuesCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    cardCode: z.ZodString;
    deferralTerm: z.ZodString;
    movements: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
    deferralTerm: string;
    movements: Record<string, any>;
}, {
    clientNumber: string;
    cardCode: string;
    deferralTerm: string;
    movements: Record<string, any>;
}>;
type CalculateDeferredValuesCommandParsed = z.infer<typeof CalculateDeferredValuesCommandSchema>;

declare const BlockCardCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    cardCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
}, {
    clientNumber: string;
    cardCode: string;
}>;
type BlockCardCommandParsed = z.infer<typeof BlockCardCommandSchema>;

declare const ProcessDeferredBillingCommandSchema: z.ZodEffects<z.ZodObject<{
    cardCode: z.ZodString;
    clientNumber: z.ZodString;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    movements: z.ZodRecord<z.ZodString, z.ZodAny>;
    deferralTerm: z.ZodString;
    cvv: z.ZodString;
    platform: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: Record<string, any>;
    cvv: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: Record<string, any>;
    cvv: string;
}>, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: Record<string, any>;
    cvv: string;
}, {
    date: string;
    clientNumber: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: Record<string, any>;
    cvv: string;
}>;
type ProcessDeferredBillingCommandParsed = z.infer<typeof ProcessDeferredBillingCommandSchema>;

declare const ProcessCashAdvanceCommandSchema: z.ZodEffects<z.ZodObject<{
    cardCode: z.ZodString;
    cvv: z.ZodString;
    expirationYear: z.ZodString;
    expirationMonth: z.ZodString;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    term: z.ZodString;
    destinationAccountNumber: z.ZodString;
    cardholderName: z.ZodString;
    platform: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    term: string;
    cardholderName: string;
}, {
    date: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    term: string;
    cardholderName: string;
}>, {
    date: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    term: string;
    cardholderName: string;
}, {
    date: string;
    cardCode: string;
    platform: string;
    device: string;
    reference: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    cvv: string;
    expirationYear: string;
    expirationMonth: string;
    term: string;
    cardholderName: string;
}>;
type ProcessCashAdvanceCommandParsed = z.infer<typeof ProcessCashAdvanceCommandSchema>;

declare const ResetPasswordCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    newPassword: string;
}, {
    clientNumber: string;
    newPassword: string;
}>;
type ResetPasswordCommandParsed = z.infer<typeof ResetPasswordCommandSchema>;

declare const ChangePasswordCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    newPassword: string;
    currentPassword: string;
}, {
    clientNumber: string;
    newPassword: string;
    currentPassword: string;
}>;
type ChangePasswordCommandParsed = z.infer<typeof ChangePasswordCommandSchema>;

declare const BlockUserCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
}, {
    clientNumber: string;
}>;
type BlockUserCommandParsed = z.infer<typeof BlockUserCommandSchema>;

declare const UnblockUserCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
}, {
    clientNumber: string;
}>;
type UnblockUserCommandParsed = z.infer<typeof UnblockUserCommandSchema>;

declare const ValidateUsernameCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    clientUsername: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    clientUsername: string;
}, {
    clientIdentification: string;
    clientUsername: string;
}>;
type ValidateUsernameCommandParsed = z.infer<typeof ValidateUsernameCommandSchema>;

declare const RegisterCredentialsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    clientUsername: z.ZodString;
    clientPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    clientUsername: string;
    clientPassword: string;
}, {
    clientNumber: string;
    clientUsername: string;
    clientPassword: string;
}>;
type RegisterCredentialsCommandParsed = z.infer<typeof RegisterCredentialsCommandSchema>;

declare const ResetUserCommandSchema: z.ZodObject<{
    clientNumber: z.ZodString;
    newUsername: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    newPassword: string;
    newUsername: string;
}, {
    clientNumber: string;
    newPassword: string;
    newUsername: string;
}>;
type ResetUserCommandParsed = z.infer<typeof ResetUserCommandSchema>;

interface SavePaymentOrderCommand {
    accountNumberOrigin: string;
    identification: string;
    clientName: string;
    phoneNumber: string;
    email: string;
    token: string;
    platform: string;
    date: string;
    device: string;
    reference: string;
    concept: string;
    amount: string;
}

interface SaveOrederPaymentResult {
    succes: boolean;
    transactionIdentifier: string;
}

interface SaveOrderPaymentProviderPort {
    saveOrderPayment(cmd: SavePaymentOrderCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SaveOrederPaymentResult>>;
}

declare class SaveOrderPaymetUseCase {
    private readonly provider;
    constructor(provider: SaveOrderPaymentProviderPort);
    execute(cmd: SavePaymentOrderCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SaveOrederPaymentResult>>;
}

declare const SavePaymentOrderCommandSchema: z.ZodEffects<z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    identification: z.ZodString;
    clientName: z.ZodString;
    phoneNumber: z.ZodString;
    email: z.ZodString;
    token: z.ZodString;
    platform: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    concept: z.ZodString;
    amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    date: string;
    identification: string;
    platform: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
    email: string;
    token: string;
}, {
    date: string;
    identification: string;
    platform: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
    email: string;
    token: string;
}>, {
    date: string;
    identification: string;
    platform: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
    email: string;
    token: string;
}, {
    date: string;
    identification: string;
    platform: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
    email: string;
    token: string;
}>;
type SavePaymentOrderParsed = z.infer<typeof SavePaymentOrderCommandSchema>;

declare const GetSelfCertificationDataCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetSelfCertificationDataCommandParsed = z.infer<typeof GetSelfCertificationDataCommandSchema>;

declare const SaveSelfCertificationDataCommandSchema: z.ZodEffects<z.ZodObject<{
    clientIdentification: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    productNumber: z.ZodString;
    fiscalResidenceList: z.ZodArray<z.ZodAny, "many">;
    personIdentification: z.ZodRecord<z.ZodString, z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    date: string;
    clientIdentification: string;
    fiscalResidenceList: any[];
    productNumber: string;
    personIdentification: Record<string, any>;
}, {
    date: string;
    clientIdentification: string;
    fiscalResidenceList: any[];
    productNumber: string;
    personIdentification: Record<string, any>;
}>, {
    date: string;
    clientIdentification: string;
    fiscalResidenceList: any[];
    productNumber: string;
    personIdentification: Record<string, any>;
}, {
    date: string;
    clientIdentification: string;
    fiscalResidenceList: any[];
    productNumber: string;
    personIdentification: Record<string, any>;
}>;
type SaveSelfCertificationDataCommandParsed = z.infer<typeof SaveSelfCertificationDataCommandSchema>;

export { type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, type BlockCardCommandParsed, BlockCardCommandSchema, type BlockUserCommandParsed, BlockUserCommandSchema, CacheError, type CalculateDeferredValuesCommandParsed, CalculateDeferredValuesCommandSchema, type CalculateDpfValuesCommandParsed, CalculateDpfValuesCommandSchema, CanonicalResponse, type ChangeCardPinCommandParsed, ChangeCardPinCommandSchema, type ChangePasswordCommandParsed, ChangePasswordCommandSchema, CheckClientActiveCommandSchema, type CreateAccountPlusCommandParsed, CreateAccountPlusCommandSchema, type CreateCreditNoteCommandParsed, CreateCreditNoteCommandSchema, type CreateDebitNoteCommandParsed, CreateDebitNoteCommandSchema, type CreateDpfCommandParsed, CreateDpfCommandSchema, DatabaseError, type ErrorMessages, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type GenerateAccountPlusDocumentsPdfCommandParsed, GenerateAccountPlusDocumentsPdfCommandSchema, type GenerateCardPinCommandParsed, GenerateCardPinCommandSchema, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, GetAccountSignersCommandSchema, type GetAccountsForCausalsCommandParsed, GetAccountsForCausalsCommandSchema, type GetCardDataCommandParsed, GetCardDataCommandSchema, type GetCardMovementsCommandParsed, GetCardMovementsCommandSchema, type GetCardStatementCommandParsed, GetCardStatementCommandSchema, type GetCatalogFitCommandParsed, GetCatalogFitCommandSchema, type GetCivilRegistryDataCommandParsed, GetCivilRegistryDataCommandSchema, type GetClientCardsCommandParsed, GetClientCardsCommandSchema, GetClientLoansCommandSchema, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, GetConsolidatedTimeDepositsSchema, type GetDeferredCardCommandParsed, GetDeferredCardCommandSchema, GetDepositMovementsSchema, type GetDpfReceiptCommandParsed, GetDpfReceiptCommandSchema, type GetFiscalResidenceCommandParsed, GetFiscalResidenceCommandSchema, GetLoanAdditionalInfoSchema, GetLoanAmortizationTableSchema, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, type GetSelfCertificationDataCommandParsed, GetSelfCertificationDataCommandSchema, type GetUserBeneficiariesCommandParsed, GetUserBeneficiariesCommandSchema, type GetUserDataCommandParsed, GetUserDataCommandSchema, type InternalTransferCommandParsed, InternalTransferCommandSchema, type ListAccountsCommandParsed, ListAccountsCommandSchema, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, type LoginCoreCommandParsed, LoginCoreCommandSchema, MappingConfigError, NetworkError, PaymentOwnCardCommandSchema, type PaymentOwnCardParsed, type ProcessCashAdvanceCommandParsed, ProcessCashAdvanceCommandSchema, type ProcessDeferredBillingCommandParsed, ProcessDeferredBillingCommandSchema, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, ProviderCallConfig, ProviderHttpError, ProviderResult, type RegisterCredentialsCommandParsed, RegisterCredentialsCommandSchema, type ResetPasswordCommandParsed, ResetPasswordCommandSchema, type ResetUserCommandParsed, ResetUserCommandSchema, type SaveOrderPaymentProviderPort, SaveOrderPaymetUseCase, type SaveOrederPaymentResult, type SavePaymentOrderCommand, SavePaymentOrderCommandSchema, type SavePaymentOrderParsed, type SaveSelfCertificationDataCommandParsed, SaveSelfCertificationDataCommandSchema, type SendEmailCommandParsed, SendEmailCommandSchema, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, type StartCausalFlowCommandParsed, StartCausalFlowCommandSchema, type SubmitFiscalResidenceCommandParsed, SubmitFiscalResidenceCommandSchema, type SubmitPepsInformationCommandParsed, SubmitPepsInformationCommandSchema, type UnblockUserCommandParsed, UnblockUserCommandSchema, type ValidateCardPinCommandParsed, ValidateCardPinCommandSchema, type ValidateCreateAccountPlusCommandParsed, ValidateCreateAccountPlusCommandSchema, type ValidateUsernameCommandParsed, ValidateUsernameCommandSchema, dateOnlyISOSchema, dateTimeDDMMYYYYSchema, dateTimeISO8601Schema, dateTimeISOSchema, errorResponse, formatZodErrors, handleUseCaseError, isValidDateComponentsDDMMYYYY, isValidDateComponentsISO, isValidDateOnlyISO, parseDateOnlyISO, parseDateTimeDDMMYYYY, parseDateTimeISO, successResponse };

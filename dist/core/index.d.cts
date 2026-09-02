import { a as CoreRawPayload, C as CanonicalResponse } from '../types-DZJuEFLS.cjs';
export { P as ProviderResult } from '../types-DZJuEFLS.cjs';
export { H as HttpResponse, P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { ZodError, z } from 'zod';
export { A as AcceptTermsCommand, a as AcceptTermsUseCase, C as CheckClientActiveCommand, b as CheckClientActiveUseCase, c as CivilRegistryData, d as CivilRegistryDataProviderPort, e as ClientActiveStatus, f as ClientChannelRegistration, g as ClientChannelRegistrationProviderPort, h as ClientProfile, i as ClientProfileByNumber, j as ClientProfileByNumberProviderPort, k as ClientProfileProviderPort, l as ClientStatusProviderPort, G as GetCivilRegistryDataCommand, m as GetCivilRegistryDataUseCase, n as GetClientProfileByNumberCommand, o as GetClientProfileByNumberUseCase, p as GetClientProfileCommand, q as GetClientProfileUseCase, R as RegisterUserChannelCommand, r as RegisterUserChannelUseCase, T as TermsAcceptance, s as TermsAcceptanceProviderPort } from '../RegisterUserChannel.usecase-DimsMrVc.cjs';
export { C as CoreRequestContext } from '../CoreRequestContext-C5PImHcm.cjs';
export { B as Branch, C as CardDeliveryInfo, a as CardDeliveryInfoProviderPort, b as CardDeliveryInfoSubmission, c as CardDeliveryInfoSubmissionProviderPort, d as CardDeliveryLocation, e as CardDeliveryLocationCatalogProviderPort, f as CardName, g as CatalogCardNamesProviderPort, h as CatalogFitItem, i as CatalogFitProviderPort, j as Channel, k as City, l as Country, m as Currency, E as EconomicActivity, n as EconomicActivityCatalogProviderPort, o as EducationTypes, p as EducationTypesProviderPort, q as EducationTypesUseCase, F as FinancialProductCatalogItem, r as FinancialProductCatalogs, s as FinancialProductCatalogsProviderPort, G as GetCardDeliveryInfoCommand, t as GetCardDeliveryInfoUseCase, u as GetCardDeliveryLocationCatalogCommand, v as GetCardDeliveryLocationCatalogUseCase, w as GetCatalogCardNamesCommand, x as GetCatalogCardNamesUseCase, y as GetCatalogFitCommand, z as GetCatalogFitUseCase, A as GetEconomicActivityCatalogUseCase, D as GetFinancialProductCatalogsCommand, H as GetFinancialProductCatalogsUseCase, I as GetInstitutionCatalogsCommand, J as GetInstitutionCatalogsUseCase, K as GetLaborPositionCatalogUseCase, L as GetOtherEconomicActivityCatalogUseCase, M as GetPersonCatalogsCommand, N as GetPersonCatalogsUseCase, O as GetPurposeCatalogUseCase, P as InstitutionCatalogs, Q as InstitutionCatalogsProviderPort, R as LaborPosition, S as LaborPositionCatalogProviderPort, T as MaritalStatus, U as MaritalStatusProviderPort, V as MaritalStatusUseCase, W as Office, X as Origin, Y as OtherEconomicActivityCatalogProviderPort, Z as PaymentServiceConcepts, _ as PaymentServiceConceptsProviderPort, $ as PaymentServiceConceptsUseCase, a0 as PersonCatalogItem, a1 as PersonCatalogs, a2 as PersonCatalogsProviderPort, a3 as ProfessionTypes, a4 as ProfessionTypesProviderPort, a5 as ProfessionTypesUseCase, a6 as Province, a7 as PurposeCatalogItem, a8 as PurposeCatalogProviderPort, a9 as SubmitCardDeliveryInfoCommand, aa as SubmitCardDeliveryInfoUseCase } from '../GetCardDeliveryInfo.usecase-DJO6f-Xz.cjs';
export { A as AuthLogin, a as AuthLoginCommand, b as AuthLoginProviderPort, c as AuthLoginUseCase, d as AuthPrecheckCommand, e as AuthPrecheckProviderPort, f as AuthPrecheckStatus, g as AuthPrecheckUseCase, B as BlockUser, h as BlockUserCommand, i as BlockUserProviderPort, j as BlockUserUseCase, C as ChangePassword, k as ChangePasswordCommand, l as ChangePasswordProviderPort, m as ChangePasswordUseCase, L as LoginCoreCommand, n as LoginCoreProviderPort, o as LoginCoreResult, p as LoginCoreUseCase, R as RegisterCredentials, q as RegisterCredentialsCommand, r as RegisterCredentialsProviderPort, s as RegisterCredentialsUseCase, t as ResetPassword, u as ResetPasswordCommand, v as ResetPasswordProviderPort, w as ResetPasswordUseCase, x as ResetUser, y as ResetUserCommand, z as ResetUserProviderPort, D as ResetUserUseCase, U as UnblockUser, E as UnblockUserCommand, F as UnblockUserProviderPort, G as UnblockUserUseCase, V as ValidateUsername, H as ValidateUsernameCommand, I as ValidateUsernameProviderPort, J as ValidateUsernameUseCase } from '../ResetUser.usecase-DMgnwCva.cjs';
export { C as ConsolidatedBuckets, a as ConsolidatedProduct, b as ConsolidatedProductsProviderPort, L as ListCustomerProductsCommand, c as ListCustomerProductsUseCase, P as ProductCategory } from '../ListCustomerProducts.usecase-D5ChTElV.cjs';
export { B as BlockCardCommand, a as BlockCardProviderPort, b as BlockCardResult, c as BlockCardUseCase, C as CalculateDeferredResult, d as CalculateDeferredValueUseCase, e as CalculateDeferredValuesCommand, f as CalculateDeferredValuesProviderPort, g as CancelPaymentOrderCommand, h as CancelPaymentOrderProviderPort, i as CancelPaymentOrderResult, j as Card, k as CardData, l as CardDataProviderPort, m as CardMovementsResult, n as CardStatementResult, o as ChangeCardPinCommand, p as ChangeCardPinProviderPort, q as ChangeCardPinResult, r as ChangeCardPinUseCase, s as ClientCardsProviderPort, t as ClientLoan, u as ClientLoansProviderPort, D as DeferredCardResult, G as GenerateCardPinCommand, v as GenerateCardPinProviderPort, w as GenerateCardPinResult, x as GenerateCardPinUseCase, y as GetCardDataCommand, z as GetCardDataUseCase, A as GetCardMovementsCommand, E as GetCardMovementsProviderPort, F as GetCardMovementsUseCase, H as GetCardStatementCommand, I as GetCardStatementProviderPort, J as GetCardStatementUseCase, K as GetClientCardsCommand, L as GetClientCardsUseCase, M as GetClientLoansCommand, N as GetClientLoansUseCase, O as GetDeferredCardCommand, P as GetDeferredCardProviderPort, Q as GetDeferredCardUseCase, R as GetLoanAdditionalInfoCommand, S as GetLoanAdditionalInfoUseCase, T as GetLoanAmortizationTableCommand, U as GetLoanAmortizationTableUseCase, V as GetPaymentOrdersCommand, W as GetPaymentOrdersProviderPort, X as LoanAdditionalInfo, Y as LoanAdditionalInfoProviderPort, Z as LoanAmortizationTable, _ as LoanAmortizationTableProviderPort, $ as LoanInstallment, a0 as Movements, a1 as PaidInstallment, a2 as PaymentOrdersResult, a3 as PaymentOrdersUseCase, a4 as ProcessCancelPaymentOrderUseCase, a5 as ProcessCashAdvanceCommand, a6 as ProcessCashAdvanceProviderPort, a7 as ProcessCashAdvanceResult, a8 as ProcessCashAdvanceUseCase, a9 as ProcessDeferredBillingCommand, aa as ProcessDeferredBillingProviderPort, ab as ProcessDeferredBillingResult, ac as ProcessDeferredBillingUseCase, ad as SavePaymentOrderCommand, ae as SavePaymentOrderProviderPort, af as SavePaymentOrderResult, ag as SavePaymetOrderUseCase, ah as SendEmailCommand, ai as SendEmailProviderPort, aj as SendEmailResult, ak as SendEmailUseCase, al as SendSmsByIdentificationCommand, am as SendSmsByIdentificationProviderPort, an as SendSmsByIdentificationResult, ao as SendSmsByIdentificationUseCase, ap as SendSmsByPhoneCommand, aq as SendSmsByPhoneProviderPort, ar as SendSmsByPhoneUseCase, as as ValidateCardPinCommand, at as ValidateCardPinProviderPort, au as ValidateCardPinResult, av as ValidateCardPinUseCase, aw as movements, ax as paymentOrder } from '../ProcessCancelPaymentOrder.usecase-pYv1Bouv.cjs';
export { A as Account, a as AccountCreationValidation, b as AccountCreationValidationProviderPort, c as AccountMovement, d as AccountMovementsProviderPort, e as AccountPlusCreation, f as AccountPlusCreationProviderPort, g as AccountPlusDocuments, h as AccountPlusDocumentsProviderPort, i as AccountPlusValidation, j as AccountPlusValidationProviderPort, k as AccountSigner, l as AccountSignersInfo, m as AccountSignersProviderPort, B as BankReferenceItem, n as BasicInformationSubmission, o as BasicInformationSubmissionProviderPort, p as BirthInfo, C as CargoData, q as ClientAccountByNumberProviderPort, r as ClientAccountsProviderPort, s as ConsolidatedAccountsProviderPort, t as ConsolidatedAccountsUseCase, u as CreateAccountPlusCommand, v as CreateAccountPlusUseCase, w as CreateElectronicAccountCommand, x as CreateElectronicAccountUseCase, D as DocumentValidation, y as DocumentValidationProviderPort, E as EconomicInfoItem, z as ElectronicAccount, F as ElectronicAccountDocuments, G as ElectronicAccountDocumentsProviderPort, H as ElectronicAccountProviderPort, I as FiscalResidence, J as FiscalResidenceData, K as FiscalResidenceItem, L as FiscalResidenceProviderPort, M as FiscalResidenceQueryProviderPort, N as FiscalResidenceSubmission, O as GenerateAccountPlusDocumentsPdfCommand, P as GenerateAccountPlusDocumentsPdfUseCase, Q as GenerateElectronicAccountDocumentsPdfCommand, R as GenerateElectronicAccountDocumentsPdfUseCase, S as GetAccountByNumberCommand, T as GetAccountByNumberUseCase, U as GetAccountMovementsCommand, V as GetAccountSignersCommand, W as GetAccountSignersUseCase, X as GetConsolidatedAccountsCommand, Y as GetFiscalResidenceCommand, Z as GetFiscalResidenceUseCase, _ as LaborInfoItem, $ as LaborInformationSubmission, a0 as LaborInformationSubmissionProviderPort, a1 as ListAccountMovementsUseCase, a2 as ListAccountsCommand, a3 as ListAccountsUseCase, a4 as Nationality, a5 as PepsAccountOpening, a6 as PepsAccountOpeningCommand, a7 as PepsAccountOpeningProviderPort, a8 as PepsAccountOpeningUseCase, a9 as PepsData, aa as PepsInformationProviderPort, ab as PepsInformationSubmission, ac as PersonalReferenceItem, ad as ReferenceDataSubmission, ae as ReferenceDataSubmissionProviderPort, af as ResidenceInfo, ag as SubmitBasicInformationCommand, ah as SubmitBasicInformationUseCase, ai as SubmitFiscalResidenceCommand, aj as SubmitFiscalResidenceUseCase, ak as SubmitLaborInformationCommand, al as SubmitLaborInformationUseCase, am as SubmitPepsInformationCommand, an as SubmitPepsInformationUseCase, ao as SubmitReferenceDataCommand, ap as SubmitReferenceDataUseCase, aq as UploadedDocumentItem, ar as ValidateCreateAccountCommand, as as ValidateCreateAccountPlusCommand, at as ValidateCreateAccountPlusUseCase, au as ValidateCreateAccountUseCase, av as ValidateDocumentCommand, aw as ValidateDocumentUseCase } from '../PepsAccountOpening.usecase-BXfNLTXZ.cjs';
export { C as ContractStatusUpdate, a as ContractStatusUpdateProviderPort, G as GetUserBeneficiariesCommand, b as GetUserBeneficiariesProviderPort, c as GetUserBeneficiariesUseCase, d as GetUserDataCommand, e as GetUserDataProviderPort, f as GetUserDataUseCase, S as SecurityQuestion, U as UpdateContractStatusCommand, g as UpdateContractStatusUseCase, h as UserAccountData, i as UserBeneficiaryResult, j as UserContactData, k as UserDataResult, l as UserPersonalData, m as UserSecurityData } from '../GetUserBeneficiaries.usecase-E-ztJhp1.cjs';
export { C as CreateExternalTransferUseCase, a as CreateInternalTransferUseCase, E as ExternalTransferCommand, b as ExternalTransferProviderPort, c as ExternalTransferResult, I as InternalTransferCommand, d as InternalTransferProviderPort, e as InternalTransferResult, f as ItemTransferInitialCharge, L as ListTransferInitialChargeProductsUseCase, T as TransferInitialChargeBuckets, g as TransferInitialChargeCategory, h as TransferInitialChargeProviderPort } from '../CreateExternalTransfer.usecase-joBihw2Z.cjs';
export { A as AddressCity, a as AddressCountry, b as AddressProvince, B as BirthCity, c as BirthCountry, C as CalculateDpfValuesCommand, d as CalculateDpfValuesUseCase, e as CityCatalog, f as ConsolidatedTimeDepositsProviderPort, g as CountryCatalog, h as CountryOfResidenceList, i as CreateDpfCommand, j as CreateDpfProviderPort, k as CreateDpfUseCase, D as DepositAdditionalInformation, l as DepositAdditionalInformationProviderPort, m as DepositCancellationType, n as DepositCancellationTypes, o as DepositCancellationTypesProviderPort, p as DepositComponent, q as DepositMovement, r as DepositMovementsProviderPort, s as DepositScheduleItem, t as DepositTypeCatalogItem, u as DepositTypeCatalogProviderPort, v as DepositTypePaymentPeriod, w as DepositTypePresumptiveRequirements, x as DepositTypePresumptiveRequirementsProviderPort, y as DpfCalculation, z as DpfCalculationProviderPort, E as DpfCreation, F as DpfPaymentSchedule, G as DpfProductCatalog, H as DpfProductsCatalogProviderPort, I as DpfReceipt, J as DpfReceiptProviderPort, K as FiscalResidenceList, L as FixedTermDepositCurrentRate, M as FixedTermDepositCurrentRatesProviderPort, N as FixedTermDepositValidation, O as FixedTermDepositValidationProviderPort, P as GetConsolidatedTimeDepositsCommand, Q as GetConsolidatedTimeDepositsUseCase, R as GetDepositAdditionalInformationCommand, S as GetDepositAdditionalInformationUseCase, T as GetDepositCancellationTypesCommand, U as GetDepositCancellationTypesUseCase, V as GetDepositMovementsCommand, W as GetDepositMovementsUseCase, X as GetDepositTypeCatalogUseCase, Y as GetDepositTypePresumptiveRequirementsCommand, Z as GetDepositTypePresumptiveRequirementsUseCase, _ as GetDpfReceiptCommand, $ as GetDpfReceiptUseCase, a0 as GetFixedTermDepositCurrentRatesCommand, a1 as GetFixedTermDepositCurrentRatesUseCase, a2 as GetSelfCertificationDataCommand, a3 as ListDpfProductsCatalogUseCase, a4 as PersonIdentification, a5 as ProvinceCatalog, a6 as ResidenceAddress, a7 as SaveSelfCertificationDataCommand, a8 as SaveSelfCertificationDataProviderPort, a9 as SaveSelfCertificationDataResult, aa as SaveSelfCertificationDataUseCase, ab as SelfCertificationData, ac as SelfCertificationDataProviderPort, ad as SelfCertificationDataResult, ae as SelfCertificationDataUseCase, af as TimeDeposit, ag as ValidateFixedTermDepositCommand, ah as ValidateFixedTermDepositUseCase } from '../ValidateFixedTermDeposit.usecase-DL72are1.cjs';
export { C as CreatePaymentOwnCardUseCase, G as GetPaymentReversalsCommand, a as GetPaymentReversalsUseCase, b as GetPaymentServiceQueryCommand, c as GetPaymentServiceQueryUseCase, P as PaymentOwnCardCommand, d as PaymentOwnCardProviderPort, e as PaymentOwnCardResult, f as PaymentReversalItemResult, g as PaymentReversalsProviderPort, h as PaymentReversalsResult, i as PaymentServiceQueryItemResult, j as PaymentServiceQueryProviderPort, k as PaymentServiceQueryResult, l as ProcessPaymentReversalCommand, m as ProcessPaymentReversalProviderPort, n as ProcessPaymentReversalResult, o as ProcessPaymentReversalUseCase, p as ProcessPaymentServiceCommand, q as ProcessPaymentServiceProviderPort, r as ProcessPaymentServiceResult, s as ProcessPaymentServiceUseCase } from '../CreatePaymentOwnCard.usecase-DWxQ_cUr.cjs';
export { A as AccountForCausalResult, C as CausalCatalogItem, a as CausalsCatalogProviderPort, b as CreateCreditNoteCommand, c as CreateCreditNoteProviderPort, d as CreateCreditNoteResult, e as CreateCreditNoteUseCase, f as CreateDebitNoteCommand, g as CreateDebitNoteProviderPort, h as CreateDebitNoteResult, i as CreateDebitNoteUseCase, G as GetAccountsForCausalsCommand, j as GetAccountsForCausalsProviderPort, k as GetAccountsForCausalsUseCase, L as ListCausalsCatalogUseCase, R as ReverseCreditNoteCommand, l as ReverseCreditNoteProviderPort, m as ReverseCreditNoteResult, n as ReverseCreditNoteUseCase, o as ReverseDebitNoteCommand, p as ReverseDebitNoteProviderPort, q as ReverseDebitNoteResult, r as ReverseDebitNoteUseCase, S as StartCausalFlowCommand, s as StartCausalFlowProviderPort, t as StartCausalFlowResult, u as StartCausalFlowUseCase } from '../ListCausalsCatalog.usecase-FCchbKXJ.cjs';

interface SuccessResponseOptions {
    client?: string;
    server?: string;
    status?: number;
    raw?: CoreRawPayload[];
    aditionalData?: Record<string, any>;
}
declare function successResponse<T>(items: T[], opts?: SuccessResponseOptions): CanonicalResponse<T>;
declare function errorResponse<T = never>(clientMsg: string, serverMsg: string, status: number, raw?: CoreRawPayload[], code?: string): CanonicalResponse<T>;

declare class ProviderHttpError extends Error {
    readonly status: number;
    readonly provider?: string | undefined;
    readonly raw?: CoreRawPayload | undefined;
    readonly codeHint?: string | undefined;
    readonly clientMessage?: string | undefined;
    constructor(message: string, status: number, provider?: string | undefined, raw?: CoreRawPayload | undefined, codeHint?: string | undefined, clientMessage?: string | undefined);
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
    typeIdentification: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    typeIdentification?: string | undefined;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    clientIdentification: string;
    typeIdentification?: string | undefined;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type GetClientProfileCommandParsed = z.infer<typeof GetClientProfileCommandSchema>;

declare const CheckClientActiveCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    mobilePhone: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
    email?: string | undefined;
    mobilePhone?: string | undefined;
}, {
    clientIdentification: string;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
    email?: string | undefined;
    mobilePhone?: string | undefined;
}>;
type CheckClientActiveCommandParsed = z.infer<typeof CheckClientActiveCommandSchema>;

declare const CoreRequestContextSchema: z.ZodObject<{
    userClient: z.ZodOptional<z.ZodString>;
    terminal: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodOptional<z.ZodString>;
    channel: z.ZodOptional<z.ZodString>;
    origin: z.ZodOptional<z.ZodString>;
    channelTime: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    platform: z.ZodOptional<z.ZodString>;
    deviceId: z.ZodOptional<z.ZodString>;
    token: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userClient?: string | undefined;
    terminal?: string | undefined;
    sessionId?: string | undefined;
    channel?: string | undefined;
    origin?: string | undefined;
    channelTime?: string | undefined;
    ip?: string | undefined;
    platform?: string | undefined;
    deviceId?: string | undefined;
    token?: string | undefined;
    userId?: string | undefined;
}, {
    userClient?: string | undefined;
    terminal?: string | undefined;
    sessionId?: string | undefined;
    channel?: string | undefined;
    origin?: string | undefined;
    channelTime?: string | undefined;
    ip?: string | undefined;
    platform?: string | undefined;
    deviceId?: string | undefined;
    token?: string | undefined;
    userId?: string | undefined;
}>;
type CoreRequestContextParsed = z.infer<typeof CoreRequestContextSchema>;

declare const AcceptTermsCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    clientUsername: z.ZodString;
    acceptsTerms: z.ZodLiteral<true>;
    acceptsDataProtection: z.ZodLiteral<true>;
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    clientUsername: string;
    acceptsTerms: true;
    acceptsDataProtection: true;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    clientIdentification: string;
    clientUsername: string;
    acceptsTerms: true;
    acceptsDataProtection: true;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type AcceptTermsCommandParsed = z.infer<typeof AcceptTermsCommandSchema>;

declare const RegisterUserChannelCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    email: z.ZodString;
    mobilePhone: z.ZodString;
    clientUsername: z.ZodString;
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    email: string;
    mobilePhone: string;
    clientUsername: string;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    clientIdentification: string;
    email: string;
    mobilePhone: string;
    clientUsername: string;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type RegisterUserChannelCommandParsed = z.infer<typeof RegisterUserChannelCommandSchema>;

declare const GetPersonCatalogsCommandSchema: z.ZodObject<{
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type GetPersonCatalogsCommandParsed = z.infer<typeof GetPersonCatalogsCommandSchema>;

declare const GetInstitutionCatalogsCommandSchema: z.ZodObject<{
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type GetInstitutionCatalogsCommandParsed = z.infer<typeof GetInstitutionCatalogsCommandSchema>;

declare const GetFinancialProductCatalogsCommandSchema: z.ZodObject<{
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}>;
type GetFinancialProductCatalogsCommandParsed = z.infer<typeof GetFinancialProductCatalogsCommandSchema>;

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
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    clientNumber: number;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
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

declare const GetCardDeliveryLocationCatalogCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetCardDeliveryLocationCatalogCommandParsed = z.infer<typeof GetCardDeliveryLocationCatalogCommandSchema>;

declare const SubmitCardDeliveryInfoCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    screenCode: z.ZodString;
    deliveryLocationCode: z.ZodString;
    deliveryCoordinateX: z.ZodOptional<z.ZodString>;
    deliveryCoordinateY: z.ZodOptional<z.ZodString>;
    cardNameCode: z.ZodString;
    deliveryReference: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    screenCode: string;
    deliveryLocationCode: string;
    cardNameCode: string;
    deliveryReference: string;
    deliveryCoordinateX?: string | undefined;
    deliveryCoordinateY?: string | undefined;
}, {
    clientIdentification: string;
    screenCode: string;
    deliveryLocationCode: string;
    cardNameCode: string;
    deliveryReference: string;
    deliveryCoordinateX?: string | undefined;
    deliveryCoordinateY?: string | undefined;
}>;
type SubmitCardDeliveryInfoCommandParsed = z.infer<typeof SubmitCardDeliveryInfoCommandSchema>;

declare const GetCatalogCardNamesCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetCatalogCardNamesCommandParsed = z.infer<typeof GetCatalogCardNamesCommandSchema>;

declare const ListCustomerProductsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    context: z.ZodOptional<z.ZodObject<{
        userClient: z.ZodOptional<z.ZodString>;
        terminal: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        channel: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodString>;
        channelTime: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        platform: z.ZodOptional<z.ZodString>;
        deviceId: z.ZodOptional<z.ZodString>;
        token: z.ZodOptional<z.ZodString>;
        userId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }, {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
}, {
    clientNumber: string | number;
    context?: {
        userClient?: string | undefined;
        terminal?: string | undefined;
        sessionId?: string | undefined;
        channel?: string | undefined;
        origin?: string | undefined;
        channelTime?: string | undefined;
        ip?: string | undefined;
        platform?: string | undefined;
        deviceId?: string | undefined;
        token?: string | undefined;
        userId?: string | undefined;
    } | undefined;
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
    platform: string;
    clientIdentification: string;
    username: string;
    clientCoreCode: string;
    device: string;
    reference: string;
    creationDateMs: number;
}, {
    platform: string;
    clientIdentification: string;
    username: string;
    clientCoreCode: string;
    device: string;
    reference: string;
    creationDateMs: number;
}>;
type CreateAccountPlusCommandParsed = z.infer<typeof CreateAccountPlusCommandSchema>;

declare const CreateElectronicAccountCommandSchema: z.ZodEffects<z.ZodObject<{
    clientIdentification: z.ZodString;
    platform: z.ZodString;
    creationDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    clientCoreCode: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    clientIdentificationType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    platform: string;
    clientIdentification: string;
    device: string;
    reference: string;
    creationDate: string;
    username?: string | undefined;
    clientCoreCode?: string | undefined;
    clientIdentificationType?: string | undefined;
}, {
    platform: string;
    clientIdentification: string;
    device: string;
    reference: string;
    creationDate: string;
    username?: string | undefined;
    clientCoreCode?: string | undefined;
    clientIdentificationType?: string | undefined;
}>, {
    platform: string;
    clientIdentification: string;
    device: string;
    reference: string;
    creationDate: string;
    username?: string | undefined;
    clientCoreCode?: string | undefined;
    clientIdentificationType?: string | undefined;
}, {
    platform: string;
    clientIdentification: string;
    device: string;
    reference: string;
    creationDate: string;
    username?: string | undefined;
    clientCoreCode?: string | undefined;
    clientIdentificationType?: string | undefined;
}>;
type CreateElectronicAccountCommandParsed = z.infer<typeof CreateElectronicAccountCommandSchema>;

declare const ListAccountsCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    isDebit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    isDebit?: string | undefined;
}, {
    clientIdentification: string;
    isDebit?: string | undefined;
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

declare const ValidateCreateAccountCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    fingerCode: z.ZodString;
    clientEmail: z.ZodString;
    clientPhone: z.ZodString;
    screenCode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    fingerCode: string;
    screenCode: number;
    clientEmail: string;
    clientPhone: string;
}, {
    clientIdentification: string;
    fingerCode: string;
    screenCode: number;
    clientEmail: string;
    clientPhone: string;
}>;
type ValidateCreateAccountCommandParsed = z.infer<typeof ValidateCreateAccountCommandSchema>;

declare const UpdateContractStatusCommandSchema: z.ZodObject<{
    clientCoreCode: z.ZodString;
    clientIdentificationType: z.ZodString;
    contractCode: z.ZodString;
    contractStatus: z.ZodBoolean;
    transactionPlatform: z.ZodString;
    transactionIp: z.ZodString;
    transactionDate: z.ZodEffects<z.ZodString, string, string>;
    contractVersion: z.ZodString;
    contractMd5: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientCoreCode: string;
    clientIdentificationType: string;
    contractCode: string;
    contractStatus: boolean;
    transactionPlatform: string;
    transactionIp: string;
    transactionDate: string;
    contractVersion: string;
    contractMd5?: string | undefined;
}, {
    clientCoreCode: string;
    clientIdentificationType: string;
    contractCode: string;
    contractStatus: boolean;
    transactionPlatform: string;
    transactionIp: string;
    transactionDate: string;
    contractVersion: string;
    contractMd5?: string | undefined;
}>;
type UpdateContractStatusCommandParsed = z.infer<typeof UpdateContractStatusCommandSchema>;

declare const ValidateDocumentCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    documentType: z.ZodEnum<["cedulaanverso", "cedulareverso", "planillaservicio"]>;
    document: z.ZodString;
}, "strip", z.ZodTypeAny, {
    document: string;
    clientIdentification: string;
    documentType: "cedulaanverso" | "cedulareverso" | "planillaservicio";
}, {
    document: string;
    clientIdentification: string;
    documentType: "cedulaanverso" | "cedulareverso" | "planillaservicio";
}>;
type ValidateDocumentCommandParsed = z.infer<typeof ValidateDocumentCommandSchema>;

declare const SubmitBasicInformationCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    clientIdentificationType: z.ZodOptional<z.ZodString>;
    fingerCode: z.ZodOptional<z.ZodString>;
    screenCode: z.ZodNumber;
    clientNames: z.ZodOptional<z.ZodString>;
    clientLastNames: z.ZodOptional<z.ZodString>;
    clientEmail: z.ZodOptional<z.ZodString>;
    clientPhone: z.ZodOptional<z.ZodString>;
    birthDateMs: z.ZodOptional<z.ZodNumber>;
    homePhone: z.ZodOptional<z.ZodString>;
    maritalStatus: z.ZodOptional<z.ZodString>;
    maritalStatusCode: z.ZodOptional<z.ZodString>;
    spouseId: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
    genderCode: z.ZodString;
    educationLevel: z.ZodOptional<z.ZodString>;
    educationLevelCode: z.ZodOptional<z.ZodString>;
    signaturePhotoUrl: z.ZodOptional<z.ZodString>;
    idPhotoUrl: z.ZodOptional<z.ZodString>;
    accountType: z.ZodOptional<z.ZodString>;
    birthInfo: z.ZodOptional<z.ZodArray<z.ZodObject<{
        birthCountryCode: z.ZodString;
        birthProvinceCode: z.ZodString;
        birthCityCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        birthCountryCode: string;
        birthProvinceCode: string;
        birthCityCode: string;
    }, {
        birthCountryCode: string;
        birthProvinceCode: string;
        birthCityCode: string;
    }>, "many">>;
    residenceInfo: z.ZodArray<z.ZodObject<{
        residenceCountryCode: z.ZodString;
        residenceProvinceCode: z.ZodString;
        residenceCityCode: z.ZodString;
        domicileAddress: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        residenceCountryCode: string;
        residenceProvinceCode: string;
        residenceCityCode: string;
        domicileAddress: string;
    }, {
        residenceCountryCode: string;
        residenceProvinceCode: string;
        residenceCityCode: string;
        domicileAddress: string;
    }>, "many">;
    nationalities: z.ZodArray<z.ZodObject<{
        nationalityCode: z.ZodString;
        identification: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        nationalityCode: string;
        identification?: string | undefined;
    }, {
        nationalityCode: string;
        identification?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    screenCode: number;
    genderCode: string;
    residenceInfo: {
        residenceCountryCode: string;
        residenceProvinceCode: string;
        residenceCityCode: string;
        domicileAddress: string;
    }[];
    nationalities: {
        nationalityCode: string;
        identification?: string | undefined;
    }[];
    fingerCode?: string | undefined;
    clientIdentificationType?: string | undefined;
    clientEmail?: string | undefined;
    clientPhone?: string | undefined;
    clientNames?: string | undefined;
    clientLastNames?: string | undefined;
    birthDateMs?: number | undefined;
    homePhone?: string | undefined;
    maritalStatus?: string | undefined;
    maritalStatusCode?: string | undefined;
    spouseId?: string | undefined;
    gender?: string | undefined;
    educationLevel?: string | undefined;
    educationLevelCode?: string | undefined;
    signaturePhotoUrl?: string | undefined;
    idPhotoUrl?: string | undefined;
    accountType?: string | undefined;
    birthInfo?: {
        birthCountryCode: string;
        birthProvinceCode: string;
        birthCityCode: string;
    }[] | undefined;
}, {
    clientIdentification: string;
    screenCode: number;
    genderCode: string;
    residenceInfo: {
        residenceCountryCode: string;
        residenceProvinceCode: string;
        residenceCityCode: string;
        domicileAddress: string;
    }[];
    nationalities: {
        nationalityCode: string;
        identification?: string | undefined;
    }[];
    fingerCode?: string | undefined;
    clientIdentificationType?: string | undefined;
    clientEmail?: string | undefined;
    clientPhone?: string | undefined;
    clientNames?: string | undefined;
    clientLastNames?: string | undefined;
    birthDateMs?: number | undefined;
    homePhone?: string | undefined;
    maritalStatus?: string | undefined;
    maritalStatusCode?: string | undefined;
    spouseId?: string | undefined;
    gender?: string | undefined;
    educationLevel?: string | undefined;
    educationLevelCode?: string | undefined;
    signaturePhotoUrl?: string | undefined;
    idPhotoUrl?: string | undefined;
    accountType?: string | undefined;
    birthInfo?: {
        birthCountryCode: string;
        birthProvinceCode: string;
        birthCityCode: string;
    }[] | undefined;
}>;
type SubmitBasicInformationCommandParsed = z.infer<typeof SubmitBasicInformationCommandSchema>;

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
        taxCountryCode: z.ZodOptional<z.ZodString>;
        taxIdentificationNumber: z.ZodOptional<z.ZodString>;
        taxAddress: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode?: string | undefined;
        taxIdentificationNumber?: string | undefined;
        taxAddress?: string | undefined;
    }, {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode?: string | undefined;
        taxIdentificationNumber?: string | undefined;
        taxAddress?: string | undefined;
    }>>;
    codeWindow: z.ZodOptional<z.ZodNumber>;
    fiscalResidenceList: z.ZodOptional<z.ZodArray<z.ZodObject<{
        countryCode: z.ZodString;
        taxId: z.ZodString;
        provinceCode: z.ZodOptional<z.ZodString>;
        cityCode: z.ZodOptional<z.ZodString>;
        fiscalResidenceAddress: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
        fiscalResidenceAddress?: string | undefined;
    }, {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
        fiscalResidenceAddress?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    hasFiscalResidence?: boolean | undefined;
    fiscalResidenceData?: {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode?: string | undefined;
        taxIdentificationNumber?: string | undefined;
        taxAddress?: string | undefined;
    } | undefined;
    codeWindow?: number | undefined;
    fiscalResidenceList?: {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
        fiscalResidenceAddress?: string | undefined;
    }[] | undefined;
}, {
    clientIdentification: string;
    hasFiscalResidence?: boolean | undefined;
    fiscalResidenceData?: {
        address: string;
        countryCode: string;
        provinceCode: string;
        cityCode: string;
        taxCountryCode?: string | undefined;
        taxIdentificationNumber?: string | undefined;
        taxAddress?: string | undefined;
    } | undefined;
    codeWindow?: number | undefined;
    fiscalResidenceList?: {
        countryCode: string;
        taxId: string;
        provinceCode?: string | undefined;
        cityCode?: string | undefined;
        fiscalResidenceAddress?: string | undefined;
    }[] | undefined;
}>;
type SubmitFiscalResidenceCommandParsed = z.infer<typeof SubmitFiscalResidenceCommandSchema>;

declare const SubmitLaborInformationCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    screenCode: z.ZodNumber;
    laborInfo: z.ZodArray<z.ZodObject<{
        laborRelationCode: z.ZodString;
        professionCode: z.ZodString;
        economicActivityCode: z.ZodString;
        otherEconomicActivityCode: z.ZodOptional<z.ZodString>;
        workplaceName: z.ZodString;
        jobPositionCode: z.ZodString;
        workStartDate: z.ZodEffects<z.ZodString, string, string>;
        workCountryCode: z.ZodOptional<z.ZodString>;
        workProvinceCode: z.ZodOptional<z.ZodString>;
        workCityCode: z.ZodOptional<z.ZodString>;
        workAddress: z.ZodString;
        workPhone: z.ZodString;
        workPhoneExtension: z.ZodOptional<z.ZodString>;
        houseNumber: z.ZodOptional<z.ZodString>;
        sector: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        laborRelationCode: string;
        professionCode: string;
        economicActivityCode: string;
        workplaceName: string;
        jobPositionCode: string;
        workStartDate: string;
        workAddress: string;
        workPhone: string;
        otherEconomicActivityCode?: string | undefined;
        workCountryCode?: string | undefined;
        workProvinceCode?: string | undefined;
        workCityCode?: string | undefined;
        workPhoneExtension?: string | undefined;
        houseNumber?: string | undefined;
        sector?: string | undefined;
    }, {
        laborRelationCode: string;
        professionCode: string;
        economicActivityCode: string;
        workplaceName: string;
        jobPositionCode: string;
        workStartDate: string;
        workAddress: string;
        workPhone: string;
        otherEconomicActivityCode?: string | undefined;
        workCountryCode?: string | undefined;
        workProvinceCode?: string | undefined;
        workCityCode?: string | undefined;
        workPhoneExtension?: string | undefined;
        houseNumber?: string | undefined;
        sector?: string | undefined;
    }>, "many">;
    economicInfo: z.ZodArray<z.ZodObject<{
        income: z.ZodString;
        expenses: z.ZodString;
        assets: z.ZodString;
        liabilities: z.ZodString;
        purposeCode: z.ZodOptional<z.ZodString>;
        managementAmount: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        income: string;
        expenses: string;
        assets: string;
        liabilities: string;
        purposeCode?: string | undefined;
        managementAmount?: string | undefined;
    }, {
        income: string;
        expenses: string;
        assets: string;
        liabilities: string;
        purposeCode?: string | undefined;
        managementAmount?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    screenCode: number;
    laborInfo: {
        laborRelationCode: string;
        professionCode: string;
        economicActivityCode: string;
        workplaceName: string;
        jobPositionCode: string;
        workStartDate: string;
        workAddress: string;
        workPhone: string;
        otherEconomicActivityCode?: string | undefined;
        workCountryCode?: string | undefined;
        workProvinceCode?: string | undefined;
        workCityCode?: string | undefined;
        workPhoneExtension?: string | undefined;
        houseNumber?: string | undefined;
        sector?: string | undefined;
    }[];
    economicInfo: {
        income: string;
        expenses: string;
        assets: string;
        liabilities: string;
        purposeCode?: string | undefined;
        managementAmount?: string | undefined;
    }[];
}, {
    clientIdentification: string;
    screenCode: number;
    laborInfo: {
        laborRelationCode: string;
        professionCode: string;
        economicActivityCode: string;
        workplaceName: string;
        jobPositionCode: string;
        workStartDate: string;
        workAddress: string;
        workPhone: string;
        otherEconomicActivityCode?: string | undefined;
        workCountryCode?: string | undefined;
        workProvinceCode?: string | undefined;
        workCityCode?: string | undefined;
        workPhoneExtension?: string | undefined;
        houseNumber?: string | undefined;
        sector?: string | undefined;
    }[];
    economicInfo: {
        income: string;
        expenses: string;
        assets: string;
        liabilities: string;
        purposeCode?: string | undefined;
        managementAmount?: string | undefined;
    }[];
}>;
type SubmitLaborInformationCommandParsed = z.infer<typeof SubmitLaborInformationCommandSchema>;

declare const SubmitReferenceDataCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    screenCode: z.ZodNumber;
    personalReferences: z.ZodArray<z.ZodObject<{
        referenceName: z.ZodString;
        referencePhone: z.ZodString;
        referenceIdentification: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        referenceName: string;
        referencePhone: string;
        referenceIdentification?: string | undefined;
    }, {
        referenceName: string;
        referencePhone: string;
        referenceIdentification?: string | undefined;
    }>, "many">;
    bankReferences: z.ZodOptional<z.ZodArray<z.ZodObject<{
        countryCode: z.ZodString;
        financialInstitutionCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        countryCode: string;
        financialInstitutionCode: string;
    }, {
        countryCode: string;
        financialInstitutionCode: string;
    }>, "many">>;
    uploadedDocuments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        documentType: z.ZodString;
        documentUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        documentType: string;
        documentUrl: string;
    }, {
        documentType: string;
        documentUrl: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    screenCode: number;
    personalReferences: {
        referenceName: string;
        referencePhone: string;
        referenceIdentification?: string | undefined;
    }[];
    bankReferences?: {
        countryCode: string;
        financialInstitutionCode: string;
    }[] | undefined;
    uploadedDocuments?: {
        documentType: string;
        documentUrl: string;
    }[] | undefined;
}, {
    clientIdentification: string;
    screenCode: number;
    personalReferences: {
        referenceName: string;
        referencePhone: string;
        referenceIdentification?: string | undefined;
    }[];
    bankReferences?: {
        countryCode: string;
        financialInstitutionCode: string;
    }[] | undefined;
    uploadedDocuments?: {
        documentType: string;
        documentUrl: string;
    }[] | undefined;
}>;
type SubmitReferenceDataCommandParsed = z.infer<typeof SubmitReferenceDataCommandSchema>;

declare const GenerateAccountPlusDocumentsPdfCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;
type GenerateAccountPlusDocumentsPdfCommandParsed = z.infer<typeof GenerateAccountPlusDocumentsPdfCommandSchema>;

declare const GenerateElectronicAccountDocumentsPdfCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodOptional<z.ZodString>;
    reference: z.ZodOptional<z.ZodString>;
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    clientIdentification?: string | undefined;
    reference?: string | undefined;
}, {
    accountNumber: string;
    clientIdentification?: string | undefined;
    reference?: string | undefined;
}>;
type GenerateElectronicAccountDocumentsPdfCommandParsed = z.infer<typeof GenerateElectronicAccountDocumentsPdfCommandSchema>;

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
    clientNumber: z.ZodOptional<z.ZodNumber>;
    companySequential: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    loanSequential: number;
    clientNumber?: number | undefined;
    companySequential?: number | undefined;
}, {
    loanSequential: number;
    clientNumber?: number | undefined;
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
    platform?: string | undefined;
    clientNumber?: string | undefined;
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
    platform?: string | undefined;
    clientNumber?: string | undefined;
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
    clientNumber: z.ZodString;
    depositTypeCode: z.ZodString;
    currency: z.ZodString;
    interestPaymentMode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    clientNumber: string;
    username: string;
    productCode: number;
    transactionPlatform: string;
    transactionDate: string;
    termDays: number;
    investmentAmount: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    depositTypeCode: string;
    currency: string;
    interestPaymentMode: string;
}, {
    clientIdentification: string;
    clientNumber: string;
    username: string;
    productCode: number;
    transactionPlatform: string;
    transactionDate: string;
    termDays: number;
    investmentAmount: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    depositTypeCode: string;
    currency: string;
    interestPaymentMode: string;
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
    clientNumber: z.ZodNumber;
    cancellationTypeCode: z.ZodString;
    netRateValue: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    clientNumber: number;
    username: string;
    accountNumber: string;
    productCode: number;
    transactionPlatform: string;
    transactionDate: string;
    termDays: number;
    investmentAmount: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    interestRate: number;
    cancellationTypeCode: string;
    netRateValue: number;
}, {
    clientIdentification: string;
    clientNumber: number;
    username: string;
    accountNumber: string;
    productCode: number;
    transactionPlatform: string;
    transactionDate: string;
    termDays: number;
    investmentAmount: string;
    transactionDevice: string;
    transactionReference: string;
    transactionNotes: string;
    clientName: string;
    interestRate: number;
    cancellationTypeCode: string;
    netRateValue: number;
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
    recipientEmail: z.ZodOptional<z.ZodString>;
    ccEmail: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    bccEmail: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    subject: z.ZodString;
    body: z.ZodString;
    recipientEmails: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    ccEmails: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    body: string;
    ccEmail: string;
    bccEmail: string;
    subject: string;
    recipientEmail?: string | undefined;
    recipientEmails?: string[] | undefined;
    ccEmails?: string[] | undefined;
}, {
    body: string;
    subject: string;
    recipientEmail?: string | undefined;
    ccEmail?: string | undefined;
    bccEmail?: string | undefined;
    recipientEmails?: string[] | undefined;
    ccEmails?: string[] | undefined;
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
    platform?: string | undefined;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    platform?: string | undefined;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}>, {
    date: string;
    platform?: string | undefined;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
    device?: string | undefined;
    reference?: string | undefined;
    parameters?: Record<string, any> | undefined;
    referenceNumber?: string | undefined;
    companyId?: string | undefined;
    serviceNumber?: string | undefined;
}, {
    date: string;
    platform?: string | undefined;
    clientNumber?: number | undefined;
    identifier?: string | undefined;
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
    platform?: string | undefined;
    identifier?: string | undefined;
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
    platform?: string | undefined;
    identifier?: string | undefined;
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
    platform?: string | undefined;
    identifier?: string | undefined;
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
    platform?: string | undefined;
    identifier?: string | undefined;
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
    channel: string;
    providerAcronym: string;
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
    channel: string;
    providerAcronym: string;
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
    transaction: z.ZodObject<{
        channel: z.ZodString;
        platform: z.ZodOptional<z.ZodString>;
        clientRequestId: z.ZodString;
        transactionId: z.ZodString;
        causal: z.ZodString;
        amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        concept: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    }, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    }>;
    debtor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
    creditor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}>;
type CreateDebitNoteCommandParsed = z.infer<typeof CreateDebitNoteCommandSchema>;

declare const CreateCreditNoteCommandSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        channel: z.ZodString;
        platform: z.ZodOptional<z.ZodString>;
        clientRequestId: z.ZodString;
        transactionId: z.ZodString;
        causal: z.ZodString;
        amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        concept: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    }, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    }>;
    debtor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
    creditor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}>;
type CreateCreditNoteCommandParsed = z.infer<typeof CreateCreditNoteCommandSchema>;

declare const ReverseDebitNoteCommandSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        channel: z.ZodString;
        platform: z.ZodOptional<z.ZodString>;
        clientRequestId: z.ZodString;
        transactionId: z.ZodString;
        transactionIdReverse: z.ZodString;
        transactionReferenceReverse: z.ZodString;
        causal: z.ZodString;
        amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        concept: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    }, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    }>;
    debtor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
    creditor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}>;
type ReverseDebitNoteCommandParsed = z.infer<typeof ReverseDebitNoteCommandSchema>;

declare const ReverseCreditNoteCommandSchema: z.ZodObject<{
    transaction: z.ZodObject<{
        channel: z.ZodString;
        platform: z.ZodOptional<z.ZodString>;
        clientRequestId: z.ZodString;
        transactionId: z.ZodString;
        transactionIdReverse: z.ZodString;
        transactionReferenceReverse: z.ZodString;
        causal: z.ZodString;
        amount: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        concept: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    }, {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    }>;
    debtor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
    creditor: z.ZodObject<{
        account: z.ZodString;
        identification: z.ZodString;
        name: z.ZodString;
        ifi: z.ZodOptional<z.ZodString>;
    } & {
        ifiCode: z.ZodOptional<z.ZodString>;
        accountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }, {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}, {
    transaction: {
        channel: string;
        amount: string;
        concept: string;
        causal: string;
        transactionId: string;
        clientRequestId: string;
        transactionIdReverse: string;
        transactionReferenceReverse: string;
        platform?: string | undefined;
    };
    debtor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
    creditor: {
        identification: string;
        account: string;
        name: string;
        accountNumber?: string | undefined;
        ifi?: string | undefined;
        ifiCode?: string | undefined;
    };
}>;
type ReverseCreditNoteCommandParsed = z.infer<typeof ReverseCreditNoteCommandSchema>;

declare const GetUserDataCommandSchema: z.ZodEffects<z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    identification: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    channel: z.ZodString;
}, "strip", z.ZodTypeAny, {
    channel: string;
    identification?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
}, {
    channel: string;
    identification?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
}>, {
    channel: string;
    identification?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
}, {
    channel: string;
    identification?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
}>;
type GetUserDataCommandParsed = z.infer<typeof GetUserDataCommandSchema>;

declare const GetUserBeneficiariesCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
    channel: z.ZodString;
}, "strip", z.ZodTypeAny, {
    channel: string;
    username: string;
    password?: string | undefined;
}, {
    channel: string;
    username: string;
    password?: string | undefined;
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
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}>, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    accountNumber: string;
    amount: string;
    concept: string;
}, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
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
    movements: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    cardCode: string;
    deferralTerm: string;
    movements: any[];
}, {
    clientNumber: string;
    cardCode: string;
    deferralTerm: string;
    movements: any[];
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
    movements: z.ZodArray<z.ZodAny, "many">;
    deferralTerm: z.ZodString;
    cvv: z.ZodString;
    platform: z.ZodString;
    date: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    device: z.ZodString;
    reference: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: any[];
    cvv: string;
}, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: any[];
    cvv: string;
}>, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: any[];
    cvv: string;
}, {
    date: string;
    platform: string;
    clientNumber: string;
    cardCode: string;
    device: string;
    reference: string;
    amount: string;
    concept: string;
    deferralTerm: string;
    movements: any[];
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
    platform: string;
    cardCode: string;
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
    platform: string;
    cardCode: string;
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
    platform: string;
    cardCode: string;
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
    platform: string;
    cardCode: string;
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
    platform: string;
    token: string;
    email: string;
    identification: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
}, {
    date: string;
    platform: string;
    token: string;
    email: string;
    identification: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
}>, {
    date: string;
    platform: string;
    token: string;
    email: string;
    identification: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
}, {
    date: string;
    platform: string;
    token: string;
    email: string;
    identification: string;
    device: string;
    reference: string;
    accountNumberOrigin: string;
    amount: string;
    concept: string;
    clientName: string;
    phoneNumber: string;
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

declare const GetPaymentOrdersSchema: z.ZodEffects<z.ZodObject<{
    clientNumber: z.ZodString;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string;
    startDate: string;
    endDate: string;
}, {
    clientNumber: string;
    startDate: string;
    endDate: string;
}>, {
    clientNumber: string;
    startDate: string;
    endDate: string;
}, {
    clientNumber: string;
    startDate: string;
    endDate: string;
}>;
type GetPaymentOrdersParsed = z.infer<typeof GetPaymentOrdersSchema>;

declare const CancelPaymentOrderSchema: z.ZodObject<{
    orderId: z.ZodNumber;
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    orderId: number;
}, {
    accountNumber: string;
    orderId: number;
}>;
type CancelPaymentOrderParsed = z.infer<typeof CancelPaymentOrderSchema>;

declare const PepsAccountOpeningCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    screenCode: z.ZodString;
    cargoData: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    screenCode: string;
    cargoData: {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    }[];
}, {
    clientIdentification: string;
    screenCode: string;
    cargoData: {
        hasPublicOffice: boolean;
        positionName: string;
        institutionName: string;
        appointmentDateMs?: number | undefined;
        endOfTermDateMs?: number | undefined;
    }[];
}>;
type PepsAccountOpeningCommandParsed = z.infer<typeof PepsAccountOpeningCommandSchema>;

declare const GetCardDeliveryInfoCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetCardDeliveryInfoCommandParsed = z.infer<typeof GetCardDeliveryInfoCommandSchema>;

declare const GetDepositTypePresumptiveRequirementsCommandSchema: z.ZodObject<{
    depositTypeCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    depositTypeCode: string;
}, {
    depositTypeCode: string;
}>;
type GetDepositTypePresumptiveRequirementsCommandParsed = z.infer<typeof GetDepositTypePresumptiveRequirementsCommandSchema>;

declare const GetDepositCancellationTypesCommandSchema: z.ZodObject<{
    depositTypeCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    depositTypeCode: string;
}, {
    depositTypeCode: string;
}>;
type GetDepositCancellationTypesCommandParsed = z.infer<typeof GetDepositCancellationTypesCommandSchema>;

declare const GetFixedTermDepositCurrentRatesCommandSchema: z.ZodObject<{
    depositTypeCode: z.ZodString;
    currency: z.ZodString;
}, "strip", z.ZodTypeAny, {
    depositTypeCode: string;
    currency: string;
}, {
    depositTypeCode: string;
    currency: string;
}>;
type GetFixedTermDepositCurrentRatesCommandParsed = z.infer<typeof GetFixedTermDepositCurrentRatesCommandSchema>;

declare const GetDepositAdditionalInformationCommandSchema: z.ZodObject<{
    depositNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    depositNumber: string;
}, {
    depositNumber: string;
}>;
type GetDepositAdditionalInformationCommandParsed = z.infer<typeof GetDepositAdditionalInformationCommandSchema>;

declare const ValidateFixedTermDepositCommandSchema: z.ZodObject<{
    depositNumber: z.ZodString;
    identificationNumber: z.ZodString;
    date: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    depositNumber: string;
    identificationNumber: string;
}, {
    date: string;
    depositNumber: string;
    identificationNumber: string;
}>;
type ValidateFixedTermDepositCommandParsed = z.infer<typeof ValidateFixedTermDepositCommandSchema>;

export { type AcceptTermsCommandParsed, AcceptTermsCommandSchema, type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, type BlockCardCommandParsed, BlockCardCommandSchema, type BlockUserCommandParsed, BlockUserCommandSchema, CacheError, type CalculateDeferredValuesCommandParsed, CalculateDeferredValuesCommandSchema, type CalculateDpfValuesCommandParsed, CalculateDpfValuesCommandSchema, type CancelPaymentOrderParsed, CancelPaymentOrderSchema, CanonicalResponse, type ChangeCardPinCommandParsed, ChangeCardPinCommandSchema, type ChangePasswordCommandParsed, ChangePasswordCommandSchema, type CheckClientActiveCommandParsed, CheckClientActiveCommandSchema, CoreRawPayload, type CoreRequestContextParsed, CoreRequestContextSchema, type CreateAccountPlusCommandParsed, CreateAccountPlusCommandSchema, type CreateCreditNoteCommandParsed, CreateCreditNoteCommandSchema, type CreateDebitNoteCommandParsed, CreateDebitNoteCommandSchema, type CreateDpfCommandParsed, CreateDpfCommandSchema, type CreateElectronicAccountCommandParsed, CreateElectronicAccountCommandSchema, DatabaseError, type ErrorMessages, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type GenerateAccountPlusDocumentsPdfCommandParsed, GenerateAccountPlusDocumentsPdfCommandSchema, type GenerateCardPinCommandParsed, GenerateCardPinCommandSchema, type GenerateElectronicAccountDocumentsPdfCommandParsed, GenerateElectronicAccountDocumentsPdfCommandSchema, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, GetAccountSignersCommandSchema, type GetAccountsForCausalsCommandParsed, GetAccountsForCausalsCommandSchema, type GetCardDataCommandParsed, GetCardDataCommandSchema, type GetCardDeliveryInfoCommandParsed, GetCardDeliveryInfoCommandSchema, type GetCardDeliveryLocationCatalogCommandParsed, GetCardDeliveryLocationCatalogCommandSchema, type GetCardMovementsCommandParsed, GetCardMovementsCommandSchema, type GetCardStatementCommandParsed, GetCardStatementCommandSchema, type GetCatalogCardNamesCommandParsed, GetCatalogCardNamesCommandSchema, type GetCatalogFitCommandParsed, GetCatalogFitCommandSchema, type GetCivilRegistryDataCommandParsed, GetCivilRegistryDataCommandSchema, type GetClientCardsCommandParsed, GetClientCardsCommandSchema, GetClientLoansCommandSchema, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, GetConsolidatedTimeDepositsSchema, type GetDeferredCardCommandParsed, GetDeferredCardCommandSchema, type GetDepositAdditionalInformationCommandParsed, GetDepositAdditionalInformationCommandSchema, type GetDepositCancellationTypesCommandParsed, GetDepositCancellationTypesCommandSchema, GetDepositMovementsSchema, type GetDepositTypePresumptiveRequirementsCommandParsed, GetDepositTypePresumptiveRequirementsCommandSchema, type GetDpfReceiptCommandParsed, GetDpfReceiptCommandSchema, type GetFinancialProductCatalogsCommandParsed, GetFinancialProductCatalogsCommandSchema, type GetFiscalResidenceCommandParsed, GetFiscalResidenceCommandSchema, type GetFixedTermDepositCurrentRatesCommandParsed, GetFixedTermDepositCurrentRatesCommandSchema, type GetInstitutionCatalogsCommandParsed, GetInstitutionCatalogsCommandSchema, GetLoanAdditionalInfoSchema, GetLoanAmortizationTableSchema, type GetPaymentOrdersParsed, GetPaymentOrdersSchema, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, type GetPersonCatalogsCommandParsed, GetPersonCatalogsCommandSchema, type GetSelfCertificationDataCommandParsed, GetSelfCertificationDataCommandSchema, type GetUserBeneficiariesCommandParsed, GetUserBeneficiariesCommandSchema, type GetUserDataCommandParsed, GetUserDataCommandSchema, type InternalTransferCommandParsed, InternalTransferCommandSchema, type ListAccountsCommandParsed, ListAccountsCommandSchema, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, type LoginCoreCommandParsed, LoginCoreCommandSchema, MappingConfigError, NetworkError, PaymentOwnCardCommandSchema, type PaymentOwnCardParsed, type PepsAccountOpeningCommandParsed, PepsAccountOpeningCommandSchema, type ProcessCashAdvanceCommandParsed, ProcessCashAdvanceCommandSchema, type ProcessDeferredBillingCommandParsed, ProcessDeferredBillingCommandSchema, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, ProviderHttpError, type RegisterCredentialsCommandParsed, RegisterCredentialsCommandSchema, type RegisterUserChannelCommandParsed, RegisterUserChannelCommandSchema, type ResetPasswordCommandParsed, ResetPasswordCommandSchema, type ResetUserCommandParsed, ResetUserCommandSchema, type ReverseCreditNoteCommandParsed, ReverseCreditNoteCommandSchema, type ReverseDebitNoteCommandParsed, ReverseDebitNoteCommandSchema, SavePaymentOrderCommandSchema, type SavePaymentOrderParsed, type SaveSelfCertificationDataCommandParsed, SaveSelfCertificationDataCommandSchema, type SendEmailCommandParsed, SendEmailCommandSchema, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, type StartCausalFlowCommandParsed, StartCausalFlowCommandSchema, type SubmitBasicInformationCommandParsed, SubmitBasicInformationCommandSchema, type SubmitCardDeliveryInfoCommandParsed, SubmitCardDeliveryInfoCommandSchema, type SubmitFiscalResidenceCommandParsed, SubmitFiscalResidenceCommandSchema, type SubmitLaborInformationCommandParsed, SubmitLaborInformationCommandSchema, type SubmitPepsInformationCommandParsed, SubmitPepsInformationCommandSchema, type SubmitReferenceDataCommandParsed, SubmitReferenceDataCommandSchema, type UnblockUserCommandParsed, UnblockUserCommandSchema, type UpdateContractStatusCommandParsed, UpdateContractStatusCommandSchema, type ValidateCardPinCommandParsed, ValidateCardPinCommandSchema, type ValidateCreateAccountCommandParsed, ValidateCreateAccountCommandSchema, type ValidateCreateAccountPlusCommandParsed, ValidateCreateAccountPlusCommandSchema, type ValidateDocumentCommandParsed, ValidateDocumentCommandSchema, type ValidateFixedTermDepositCommandParsed, ValidateFixedTermDepositCommandSchema, type ValidateUsernameCommandParsed, ValidateUsernameCommandSchema, dateOnlyISOSchema, dateTimeDDMMYYYYSchema, dateTimeISO8601Schema, dateTimeISOSchema, errorResponse, formatZodErrors, handleUseCaseError, isValidDateComponentsDDMMYYYY, isValidDateComponentsISO, isValidDateOnlyISO, parseDateOnlyISO, parseDateTimeDDMMYYYY, parseDateTimeISO, successResponse };

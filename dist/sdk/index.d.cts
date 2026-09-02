import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { acceptTerms, checkClientStatus, createAcceptTermsUseCase, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber } from './client/index.cjs';
export { authLogin, authPrecheck, blockUser, changePassword, createAuthLoginUseCase, createAuthPrecheckUseCase, createBlockUserUseCase, createChangePasswordUseCase, createLoginCoreUseCase, createRegisterCredentialsUseCase, createResetPasswordUseCase, createResetUserUseCase, createUnblockUserUseCase, createValidateUsernameUseCase, loginCore, registerCredentials, resetPassword, resetUser, unblockUser, validateUsername } from './auth/index.cjs';
export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogCardNamesUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createGetCardDeliveryInfoUseCase, createGetFinancialProductCatalogsUseCase, createGetInstitutionCatalogsUseCase, createGetPersonCatalogsUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryInfo, getCardDeliveryLocationCatalog, getCatalogCardNames, getEconomicActivityCatalog, getFinancialProductCatalogs, getInstitutionCatalogs, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPersonCatalogs, getPurposeCatalog, submitCardDeliveryInfo } from './catalog/index.cjs';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.cjs';
import { A as AdapterFactoryOptions } from '../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../types-DZJuEFLS.cjs';
import { L as GetClientCardsUseCase, K as GetClientCardsCommand, j as Card, z as GetCardDataUseCase, y as GetCardDataCommand, k as CardData, o as ChangeCardPinCommand, q as ChangeCardPinResult, r as ChangeCardPinUseCase, x as GenerateCardPinUseCase, G as GenerateCardPinCommand, w as GenerateCardPinResult, av as ValidateCardPinUseCase, as as ValidateCardPinCommand, au as ValidateCardPinResult, F as GetCardMovementsUseCase, A as GetCardMovementsCommand, m as CardMovementsResult, J as GetCardStatementUseCase, H as GetCardStatementCommand, n as CardStatementResult, Q as GetDeferredCardUseCase, O as GetDeferredCardCommand, D as DeferredCardResult, e as CalculateDeferredValuesCommand, C as CalculateDeferredResult, d as CalculateDeferredValueUseCase, B as BlockCardCommand, b as BlockCardResult, c as BlockCardUseCase, a9 as ProcessDeferredBillingCommand, ab as ProcessDeferredBillingResult, ac as ProcessDeferredBillingUseCase, a5 as ProcessCashAdvanceCommand, a7 as ProcessCashAdvanceResult, a8 as ProcessCashAdvanceUseCase, N as GetClientLoansUseCase, M as GetClientLoansCommand, t as ClientLoan, S as GetLoanAdditionalInfoUseCase, R as GetLoanAdditionalInfoCommand, X as LoanAdditionalInfo, U as GetLoanAmortizationTableUseCase, T as GetLoanAmortizationTableCommand, Z as LoanAmortizationTable, ao as SendSmsByIdentificationUseCase, al as SendSmsByIdentificationCommand, an as SendSmsByIdentificationResult, ar as SendSmsByPhoneUseCase, ap as SendSmsByPhoneCommand, ak as SendEmailUseCase, ah as SendEmailCommand, aj as SendEmailResult, V as GetPaymentOrdersCommand, a2 as PaymentOrdersResult, a3 as PaymentOrdersUseCase, g as CancelPaymentOrderCommand, i as CancelPaymentOrderResult, a4 as ProcessCancelPaymentOrderUseCase, ad as SavePaymentOrderCommand, af as SavePaymentOrderResult, ag as SavePaymetOrderUseCase } from '../ProcessCancelPaymentOrder.usecase-pYv1Bouv.cjs';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createCreateElectronicAccountUseCase, createElectronicAccount, createGenerateAccountPlusDocumentsPdfUseCase, createGenerateElectronicAccountDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createPepsAccountOpeningUseCase, createSubmitBasicInformationUseCase, createSubmitFiscalResidenceUseCase, createSubmitLaborInformationUseCase, createSubmitPepsInformationUseCase, createSubmitReferenceDataUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, generateElectronicAccountDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, pepsAccountOpening, submitBasicInformation, submitFiscalResidence, submitLaborInformation, submitPepsInformation, submitReferenceData, validateCreateAccount, validateCreateAccountPlus, validateDocument } from './account/index.cjs';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.cjs';
export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositAdditionalInformationUseCase, createDepositCancellationTypesUseCase, createDepositMovementsUseCase, createDepositTypeCatalogUseCase, createDepositTypePresumptiveRequirementsUseCase, createDpf, createFixedTermDepositCurrentRatesUseCase, createFixedTermDepositValidationUseCase, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositAdditionalInformation, getDepositCancellationTypes, getDepositMovements, getDepositTypeCatalog, getDepositTypePresumptiveRequirements, getDpfReceipt, getFixedTermDepositCurrentRates, getSelfCertificationData, getSelfCertificationDataUseCase, listDpfProductsCatalog, saveSelfCertificationData, saveSelfCertificationDataUseCase, validateFixedTermDeposit } from './deposit/index.cjs';
export { createPaymentOwnCardUseCase, createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentOwnCard, processPaymentReversal, processPaymentService } from './payment/index.cjs';
export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createReverseCreditNoteUseCase, createReverseDebitNoteUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, reverseCreditNote, reverseDebitNote, startCausalFlow } from './causal/index.cjs';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, createUpdateContractStatusUseCase, getUserBeneficiaries, getUserData, updateContractStatus } from './user/index.cjs';
import '../AcceptTerms.usecase-hcNxvHvf.cjs';
import '../CoreRequestContext-C5PImHcm.cjs';
import '../ResetUser.usecase-DMgnwCva.cjs';
import '../GetCardDeliveryInfo.usecase-DJO6f-Xz.cjs';
import '../ListCustomerProducts.usecase-D5ChTElV.cjs';
import '../PepsAccountOpening.usecase-BXfNLTXZ.cjs';
import '../CreateExternalTransfer.usecase-joBihw2Z.cjs';
import '../ValidateFixedTermDeposit.usecase-DL72are1.cjs';
import '../CreatePaymentOwnCard.usecase-DWxQ_cUr.cjs';
import '../ListCausalsCatalog.usecase-FCchbKXJ.cjs';
import '../GetUserBeneficiaries.usecase-E-ztJhp1.cjs';

declare function hasMySqlPool(): boolean;
declare function hasRedisClient(): boolean;
declare function isDebugMode(): boolean;
declare function setDebugMode(enabled: boolean): void;
declare function setMySqlPool(pool: Pool): void;
declare function getMySqlPool(): Pool;
declare function setRedisClient(client: Redis): void;
declare function getRedisClient(): Redis;
declare function shutdown(): Promise<void>;

type ProviderKey = 'dy-23' | 'dy-29' | 'dy-mu' | 'dy-vg' | 'dy-09' | 'dy-lc';
interface InitOptions {
    mysqlPool?: Pool;
    redisClient?: Redis;
}

declare function createClientCardsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetClientCardsUseCase;
declare function getClientCards(command: GetClientCardsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<Card[]>>;

declare function createCardDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCardDataUseCase;
declare function getCardData(command: GetCardDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardData>>;

declare function createChangeCardPinUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ChangeCardPinUseCase;
declare function changeCardPin(command: ChangeCardPinCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ChangeCardPinResult>>;

declare function createGenerateCardPinUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GenerateCardPinUseCase;
declare function generateCardPin(command: GenerateCardPinCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<GenerateCardPinResult>>;

declare function createValidateCardPinUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateCardPinUseCase;
declare function validateCardPin(command: ValidateCardPinCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ValidateCardPinResult>>;

declare function createGetCardMovementsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCardMovementsUseCase;
declare function getCardMovements(command: GetCardMovementsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardMovementsResult>>;

declare function createGetCardStatementUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCardStatementUseCase;
declare function getCardStatement(command: GetCardStatementCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CardStatementResult>>;

declare function createGetDeferredCardUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDeferredCardUseCase;
declare function getDeferredCard(command: GetDeferredCardCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DeferredCardResult>>;

declare function calculateDeferredValuesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CalculateDeferredValueUseCase;
declare function calculateDeferredValues(command: CalculateDeferredValuesCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CalculateDeferredResult>>;

declare function blockCardUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): BlockCardUseCase;
declare function BlockCard(command: BlockCardCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<BlockCardResult>>;

declare function processDeferredBillingUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProcessDeferredBillingUseCase;
declare function processDeferredBilling(command: ProcessDeferredBillingCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProcessDeferredBillingResult>>;

declare function processCashAdvancedUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProcessCashAdvanceUseCase;
declare function processCashAdvanced(command: ProcessCashAdvanceCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProcessCashAdvanceResult>>;

declare function createClientLoansUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetClientLoansUseCase;
declare function getClientLoans(command: GetClientLoansCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ClientLoan[]>>;

declare function createLoanAdditionalInfoUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetLoanAdditionalInfoUseCase;
declare function getLoanAdditionalInfo(command: GetLoanAdditionalInfoCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<LoanAdditionalInfo>>;

declare function createLoanAmortizationTableUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetLoanAmortizationTableUseCase;
declare function getLoanAmortizationTable(command: GetLoanAmortizationTableCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<LoanAmortizationTable>>;

declare function createSendSmsByIdentificationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SendSmsByIdentificationUseCase;
declare function sendSmsByIdentification(command: SendSmsByIdentificationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;

declare function createSendSmsByPhoneUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SendSmsByPhoneUseCase;
declare function sendSmsByPhone(command: SendSmsByPhoneCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;

declare function createSendEmailUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SendEmailUseCase;
declare function sendEmail(command: SendEmailCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SendEmailResult>>;

declare function getPaymentOrdersUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): PaymentOrdersUseCase;
declare function getPaymentOrder(command: GetPaymentOrdersCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentOrdersResult>>;

declare function cancelPaymentOrderUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProcessCancelPaymentOrderUseCase;
declare function cancelPaymentOrder(command: CancelPaymentOrderCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CancelPaymentOrderResult>>;

declare function savePaymentOrderUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SavePaymetOrderUseCase;
declare function savePaymentOrder(command: SavePaymentOrderCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<SavePaymentOrderResult>>;

export { BlockCard, type InitOptions, type ProviderKey, blockCardUseCase, calculateDeferredValues, calculateDeferredValuesUseCase, cancelPaymentOrder, cancelPaymentOrderUseCase, changeCardPin, createCardDataUseCase, createChangeCardPinUseCase, createClientCardsUseCase, createClientLoansUseCase, createGenerateCardPinUseCase, createGetCardMovementsUseCase, createGetCardStatementUseCase, createGetDeferredCardUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendEmailUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, createValidateCardPinUseCase, generateCardPin, getCardData, getCardMovements, getCardStatement, getClientCards, getClientLoans, getDeferredCard, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getPaymentOrder, getPaymentOrdersUseCase, getRedisClient, hasMySqlPool, hasRedisClient, isDebugMode, processCashAdvanced, processCashAdvancedUseCase, processDeferredBilling, processDeferredBillingUseCase, savePaymentOrder, savePaymentOrderUseCase, sendEmail, sendSmsByIdentification, sendSmsByPhone, setDebugMode, setMySqlPool, setRedisClient, shutdown, validateCardPin };

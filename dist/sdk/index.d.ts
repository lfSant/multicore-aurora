import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber } from './client/index.js';
export { authLogin, authPrecheck, blockUser, changePassword, createAuthLoginUseCase, createAuthPrecheckUseCase, createBlockUserUseCase, createChangePasswordUseCase, createLoginCoreUseCase, createRegisterCredentialsUseCase, createResetPasswordUseCase, createResetUserUseCase, createUnblockUserUseCase, createValidateUsernameUseCase, loginCore, registerCredentials, resetPassword, resetUser, unblockUser, validateUsername } from './auth/index.js';
export { catalogFilter, createCardDeliveryLocationCatalogUseCase, createCatalogCardNamesUseCase, createCatalogFilterUseCase, createEconomicActivityCatalogUseCase, createGetCardDeliveryInfoUseCase, createLaborPositionCatalogUseCase, createOtherEconomicActivityCatalogUseCase, createPurposeCatalogUseCase, createSubmitCardDeliveryInfoUseCase, findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getCardDeliveryInfo, getCardDeliveryLocationCatalog, getCatalogCardNames, getEconomicActivityCatalog, getLaborPositionCatalog, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getOtherEconomicActivityCatalog, getPaymentServiceConcepts, getPurposeCatalog, submitCardDeliveryInfo } from './catalog/index.js';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.js';
import { A as AdapterFactoryOptions } from '../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../types-DZJuEFLS.js';
import { I as GetClientCardsUseCase, H as GetClientCardsCommand, g as Card, w as GetCardDataUseCase, v as GetCardDataCommand, h as CardData, l as ChangeCardPinCommand, n as ChangeCardPinResult, o as ChangeCardPinUseCase, u as GenerateCardPinUseCase, G as GenerateCardPinCommand, t as GenerateCardPinResult, aj as ValidateCardPinUseCase, ag as ValidateCardPinCommand, ai as ValidateCardPinResult, z as GetCardMovementsUseCase, x as GetCardMovementsCommand, j as CardMovementsResult, F as GetCardStatementUseCase, A as GetCardStatementCommand, k as CardStatementResult, N as GetDeferredCardUseCase, L as GetDeferredCardCommand, D as DeferredCardResult, e as CalculateDeferredValuesCommand, C as CalculateDeferredResult, d as CalculateDeferredValueUseCase, B as BlockCardCommand, b as BlockCardResult, c as BlockCardUseCase, a1 as ProcessDeferredBillingCommand, a3 as ProcessDeferredBillingResult, a4 as ProcessDeferredBillingUseCase, Z as ProcessCashAdvanceCommand, $ as ProcessCashAdvanceResult, a0 as ProcessCashAdvanceUseCase, K as GetClientLoansUseCase, J as GetClientLoansCommand, q as ClientLoan, P as GetLoanAdditionalInfoUseCase, O as GetLoanAdditionalInfoCommand, S as LoanAdditionalInfo, R as GetLoanAmortizationTableUseCase, Q as GetLoanAmortizationTableCommand, U as LoanAmortizationTable, ac as SendSmsByIdentificationUseCase, a9 as SendSmsByIdentificationCommand, ab as SendSmsByIdentificationResult, af as SendSmsByPhoneUseCase, ad as SendSmsByPhoneCommand, a8 as SendEmailUseCase, a5 as SendEmailCommand, a7 as SendEmailResult } from '../ProcessCashAdvance.usecase-BQKG8XE8.js';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createGenerateAccountPlusDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createPepsAccountOpeningUseCase, createSubmitBasicInformationUseCase, createSubmitFiscalResidenceUseCase, createSubmitLaborInformationUseCase, createSubmitPepsInformationUseCase, createSubmitReferenceDataUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, pepsAccountOpening, submitBasicInformation, submitFiscalResidence, submitLaborInformation, submitPepsInformation, submitReferenceData, validateCreateAccount, validateCreateAccountPlus, validateDocument } from './account/index.js';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.js';
export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositMovementsUseCase, createDpf, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositMovements, getDpfReceipt, getSelfCertificationData, getSelfCertificationDataUseCase, listDpfProductsCatalog, saveSelfCertificationData, saveSelfCertificationDataUseCase } from './deposit/index.js';
export { createPaymentOwnCardUseCase, createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentOwnCard, processPaymentReversal, processPaymentService } from './payment/index.js';
export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, startCausalFlow } from './causal/index.js';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, createUpdateContractStatusUseCase, getUserBeneficiaries, getUserData, updateContractStatus } from './user/index.js';
import '../GetCivilRegistryData.usecase-BZ-gwHEV.js';
import '../ResetUser.usecase-BbdiyNYi.js';
import '../GetCardDeliveryInfo.usecase-BvkpXwX8.js';
import '../ListCustomerProducts.usecase-BD9vnCy6.js';
import '../PepsAccountOpening.usecase-KkBH2BgN.js';
import '../CreateExternalTransfer.usecase-DhAfF6Sr.js';
import '../SaveSelfCertificationData.usecase-B6cMiZis.js';
import '../CreatePaymentOwnCard.usecase-CXMxSW4V.js';
import '../ListCausalsCatalog.usecase-DKrwfsF9.js';
import '../GetUserBeneficiaries.usecase-8GehKDz1.js';

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

export { BlockCard, type InitOptions, type ProviderKey, blockCardUseCase, calculateDeferredValues, calculateDeferredValuesUseCase, changeCardPin, createCardDataUseCase, createChangeCardPinUseCase, createClientCardsUseCase, createClientLoansUseCase, createGenerateCardPinUseCase, createGetCardMovementsUseCase, createGetCardStatementUseCase, createGetDeferredCardUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendEmailUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, createValidateCardPinUseCase, generateCardPin, getCardData, getCardMovements, getCardStatement, getClientCards, getClientLoans, getDeferredCard, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getRedisClient, hasMySqlPool, hasRedisClient, isDebugMode, processCashAdvanced, processCashAdvancedUseCase, processDeferredBilling, processDeferredBillingUseCase, sendEmail, sendSmsByIdentification, sendSmsByPhone, setDebugMode, setMySqlPool, setRedisClient, shutdown, validateCardPin };

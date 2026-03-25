import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber } from './client/index.js';
export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase, createLoginCoreUseCase, loginCore } from './auth/index.js';
export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts } from './catalog/index.js';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.js';
import { A as AdapterFactoryOptions } from '../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../types-D11BfpWV.js';
import { p as GetClientCardsUseCase, o as GetClientCardsCommand, C as Card, n as GetCardDataUseCase, m as GetCardDataCommand, a as CardData, c as ChangeCardPinCommand, e as ChangeCardPinResult, f as ChangeCardPinUseCase, l as GenerateCardPinUseCase, G as GenerateCardPinCommand, k as GenerateCardPinResult, r as GetClientLoansUseCase, q as GetClientLoansCommand, h as ClientLoan, t as GetLoanAdditionalInfoUseCase, s as GetLoanAdditionalInfoCommand, L as LoanAdditionalInfo, v as GetLoanAmortizationTableUseCase, u as GetLoanAmortizationTableCommand, x as LoanAmortizationTable, D as SendSmsByIdentificationUseCase, S as SendSmsByIdentificationCommand, B as SendSmsByIdentificationResult, H as SendSmsByPhoneUseCase, E as SendSmsByPhoneCommand } from '../SendSmsByPhone.usecase-7YXuye7C.js';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createGenerateAccountPlusDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createSubmitFiscalResidenceUseCase, createSubmitPepsInformationUseCase, createValidateCreateAccountPlusUseCase, generateAccountPlusDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, submitFiscalResidence, submitPepsInformation, validateCreateAccountPlus } from './account/index.js';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.js';
export { calculateDpfValues, createCalculateDpfValuesUseCase, createConsolidatedTimeDepositsUseCase, createCreateDpfUseCase, createDepositMovementsUseCase, createDpf, createGetDpfReceiptUseCase, createListDpfProductsCatalogUseCase, getConsolidatedTimeDeposits, getDepositMovements, getDpfReceipt, listDpfProductsCatalog } from './deposit/index.js';
export { createPaymentOwnCardUseCase, createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentOwnCard, processPaymentReversal, processPaymentService } from './payment/index.js';
export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, startCausalFlow } from './causal/index.js';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, getUserBeneficiaries, getUserData } from './user/index.js';
import '../GetCivilRegistryData.usecase-Dxmh22DJ.js';
import '../LoginCore.usecase-Bb6QSonc.js';
import '../PaymentServiceConcepts.usecase-LJaJ66Z-.js';
import '../ListCustomerProducts.usecase-DAV9SL84.js';
import '../GenerateAccountPlusDocumentsPdf.usecase-DtkGuTqH.js';
import '../CreateExternalTransfer.usecase-DA2yQMNC.js';
import '../GetDpfReceipt.usecase-j-1fcN8H.js';
import '../CreatePaymentOwnCard.usecase-CBvoi8Az.js';
import '../ListCausalsCatalog.usecase-BHSMskg2.js';
import '../GetUserBeneficiaries.usecase-D4SpPEz9.js';

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

export { type InitOptions, type ProviderKey, changeCardPin, createCardDataUseCase, createChangeCardPinUseCase, createClientCardsUseCase, createClientLoansUseCase, createGenerateCardPinUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, generateCardPin, getCardData, getClientCards, getClientLoans, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getRedisClient, hasMySqlPool, hasRedisClient, isDebugMode, sendSmsByIdentification, sendSmsByPhone, setDebugMode, setMySqlPool, setRedisClient, shutdown };

import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, getClientProfile, getClientProfileByNumber } from './client/index.js';
export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase, createLoginCoreUseCase, loginCore } from './auth/index.js';
export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts } from './catalog/index.js';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.js';
import { A as AdapterFactoryOptions } from '../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../types-D11BfpWV.js';
import { r as GetClientCardsUseCase, q as GetClientCardsCommand, C as Card, p as GetCardDataUseCase, o as GetCardDataCommand, a as CardData, c as ChangeCardPinCommand, e as ChangeCardPinResult, f as ChangeCardPinUseCase, n as GenerateCardPinUseCase, G as GenerateCardPinCommand, m as GenerateCardPinResult, t as GetClientLoansUseCase, s as GetClientLoansCommand, h as ClientLoan, z as GetLoanAdditionalInfoUseCase, y as GetLoanAdditionalInfoCommand, L as LoanAdditionalInfo, B as GetLoanAmortizationTableUseCase, A as GetLoanAmortizationTableCommand, F as LoanAmortizationTable, v as GetConsolidatedTimeDepositsUseCase, u as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, x as GetDepositMovementsUseCase, w as GetDepositMovementsCommand, D as DepositMovement, M as SendSmsByIdentificationUseCase, S as SendSmsByIdentificationCommand, K as SendSmsByIdentificationResult, P as SendSmsByPhoneUseCase, N as SendSmsByPhoneCommand } from '../SendSmsByPhone.usecase-B0EoPRMZ.js';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getClientAccountByNumber } from './account/index.js';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.js';
export { createPaymentOwnCardUseCase, createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentOwnCard, processPaymentReversal, processPaymentService } from './payment/index.js';
export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, startCausalFlow } from './causal/index.js';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, getUserBeneficiaries, getUserData } from './user/index.js';
import '../GetClientProfileByNumber.usecase-D4nQOFzs.js';
import '../LoginCore.usecase-Bb6QSonc.js';
import '../PaymentServiceConcepts.usecase-LJaJ66Z-.js';
import '../ListCustomerProducts.usecase-DAV9SL84.js';
import '../GetAccountSigners.usecase-BIKu_oGT.js';
import '../CreateExternalTransfer.usecase-AUSwuJf9.js';
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

declare function createConsolidatedTimeDepositsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetConsolidatedTimeDepositsUseCase;
declare function getConsolidatedTimeDeposits(command: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<TimeDeposit[]>>;

declare function createDepositMovementsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetDepositMovementsUseCase;
declare function getDepositMovements(command: GetDepositMovementsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DepositMovement[]>>;

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

export { type InitOptions, type ProviderKey, changeCardPin, createCardDataUseCase, createChangeCardPinUseCase, createClientCardsUseCase, createClientLoansUseCase, createConsolidatedTimeDepositsUseCase, createDepositMovementsUseCase, createGenerateCardPinUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, generateCardPin, getCardData, getClientCards, getClientLoans, getConsolidatedTimeDeposits, getDepositMovements, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getRedisClient, hasMySqlPool, hasRedisClient, isDebugMode, sendSmsByIdentification, sendSmsByPhone, setDebugMode, setMySqlPool, setRedisClient, shutdown };

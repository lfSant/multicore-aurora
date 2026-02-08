import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, getClientProfile, getClientProfileByNumber } from './client/index.cjs';
export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase, createLoginCoreUseCase, loginCore } from './auth/index.cjs';
export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts } from './catalog/index.cjs';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.cjs';
import { A as AdapterFactoryOptions } from '../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../types-D11BfpWV.cjs';
import { b as GetClientCardsUseCase, G as GetClientCardsCommand, C as Card, f as GetClientLoansUseCase, c as GetClientLoansCommand, d as ClientLoan, i as GetLoanAdditionalInfoUseCase, g as GetLoanAdditionalInfoCommand, L as LoanAdditionalInfo, n as GetLoanAmortizationTableUseCase, j as GetLoanAmortizationTableCommand, l as LoanAmortizationTable, q as GetConsolidatedTimeDepositsUseCase, o as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, t as GetDepositMovementsUseCase, r as GetDepositMovementsCommand, D as DepositMovement, w as SendSmsByIdentificationUseCase, S as SendSmsByIdentificationCommand, u as SendSmsByIdentificationResult, z as SendSmsByPhoneUseCase, x as SendSmsByPhoneCommand } from '../SendSmsByPhone.usecase-X-Ys-WmM.cjs';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetAccountsForCausalsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getAccountsForCausals, getClientAccountByNumber } from './account/index.cjs';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.cjs';
export { createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentReversal, processPaymentService } from './payment/index.cjs';
export { createStartRiskFlowUseCase, startRiskFlow } from './risk/index.cjs';
export { createValidateCreditNoteUseCase, createValidateDebitNoteUseCase, validateCreditNote, validateDebitNote } from './causal/index.cjs';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, getUserBeneficiaries, getUserData } from './user/index.cjs';
import '../GetClientProfileByNumber.usecase-Dul49kWX.cjs';
import '../LoginCore.usecase-BK03Fec-.cjs';
import '../PaymentServiceConcepts.usecase-BQmQsErH.cjs';
import '../ListCustomerProducts.usecase-Dk8l7N6X.cjs';
import '../GetAccountsForCausals.usecase-Dr0Mz025.cjs';
import '../CreateExternalTransfer.usecase-DY0AZz6U.cjs';
import '../ProcessPaymentReversal.usecase-gtqQ_O_F.cjs';
import '../StartRiskFlow.usecase-ByGp-cm1.cjs';
import '../ValidateCreditNote.usecase-eOK5DQAi.cjs';
import '../GetUserBeneficiaries.usecase-GXmBdseU.cjs';

declare function hasMySqlPool(): boolean;
declare function hasRedisClient(): boolean;
declare function isDebugMode(): boolean;
declare function setDebugMode(enabled: boolean): void;
declare function setMySqlPool(pool: Pool): void;
declare function getMySqlPool(): Pool;
declare function setRedisClient(client: Redis): void;
declare function getRedisClient(): Redis;
declare function shutdown(): Promise<void>;

type ProviderKey = 'dy-23' | 'dy-29' | 'dy-cc';
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

export { type InitOptions, type ProviderKey, createClientCardsUseCase, createClientLoansUseCase, createConsolidatedTimeDepositsUseCase, createDepositMovementsUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, getClientCards, getClientLoans, getConsolidatedTimeDeposits, getDepositMovements, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getRedisClient, hasMySqlPool, hasRedisClient, isDebugMode, sendSmsByIdentification, sendSmsByPhone, setDebugMode, setMySqlPool, setRedisClient, shutdown };

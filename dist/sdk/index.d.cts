import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, getClientProfile, getClientProfileByNumber } from './client/index.cjs';
export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase } from './auth/index.cjs';
export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts } from './catalog/index.cjs';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.cjs';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetAccountsForCausalsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getAccountsForCausals, getClientAccountByNumber } from './account/index.cjs';
import { A as AdapterFactoryOptions } from '../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig } from '../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../types-D11BfpWV.cjs';
import { b as GetClientLoansUseCase, G as GetClientLoansCommand, C as ClientLoan, e as GetLoanAdditionalInfoUseCase, c as GetLoanAdditionalInfoCommand, L as LoanAdditionalInfo, j as GetLoanAmortizationTableUseCase, f as GetLoanAmortizationTableCommand, h as LoanAmortizationTable, m as GetConsolidatedTimeDepositsUseCase, k as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, p as GetDepositMovementsUseCase, n as GetDepositMovementsCommand, D as DepositMovement, s as SendSmsByIdentificationUseCase, S as SendSmsByIdentificationCommand, q as SendSmsByIdentificationResult, v as SendSmsByPhoneUseCase, t as SendSmsByPhoneCommand } from '../SendSmsByPhone.usecase-BSSlRpKQ.cjs';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.cjs';
export { createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentReversal, processPaymentService } from './payment/index.cjs';
export { createStartRiskFlowUseCase, startRiskFlow } from './risk/index.cjs';
export { createValidateCreditNoteUseCase, createValidateDebitNoteUseCase, validateCreditNote, validateDebitNote } from './causal/index.cjs';
export { createGetUserBeneficiariesUseCase, createGetUserDataUseCase, getUserBeneficiaries, getUserData } from './user/index.cjs';
import '../GetClientProfileByNumber.usecase-Dul49kWX.cjs';
import '../AuthLogin.usecase-BwQ8-wf6.cjs';
import '../PaymentServiceConcepts.usecase-BQmQsErH.cjs';
import '../ListCustomerProducts.usecase-Dk8l7N6X.cjs';
import '../GetAccountsForCausals.usecase-CTk0Kr3j.cjs';
import '../CreateExternalTransfer.usecase-CFuGd-Y-.cjs';
import '../ProcessPaymentReversal.usecase-gtqQ_O_F.cjs';
import '../StartRiskFlow.usecase-ByGp-cm1.cjs';
import '../ValidateCreditNote.usecase-eOK5DQAi.cjs';
import '../GetUserBeneficiaries.usecase-GXmBdseU.cjs';

declare function hasMySqlPool(): boolean;
declare function hasRedisClient(): boolean;
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

export { type InitOptions, type ProviderKey, createClientLoansUseCase, createConsolidatedTimeDepositsUseCase, createDepositMovementsUseCase, createLoanAdditionalInfoUseCase, createLoanAmortizationTableUseCase, createSendSmsByIdentificationUseCase, createSendSmsByPhoneUseCase, getClientLoans, getConsolidatedTimeDeposits, getDepositMovements, getLoanAdditionalInfo, getLoanAmortizationTable, getMySqlPool, getRedisClient, hasMySqlPool, hasRedisClient, sendSmsByIdentification, sendSmsByPhone, setMySqlPool, setRedisClient, shutdown };

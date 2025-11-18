import { Pool } from 'mysql2/promise';
import { Redis } from 'ioredis';
export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, getClientProfile, getClientProfileByNumber } from './client/index.cjs';
export { authLogin, authPrecheck, createAuthLoginUseCase, createAuthPrecheckUseCase } from './auth/index.cjs';
export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts } from './catalog/index.cjs';
export { getConsolidatedProductsUseCase, listConsolidatedProducts } from './product/index.cjs';
export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getClientAccountByNumber } from './account/index.cjs';
import { A as AdapterFactoryOptions } from '../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig, C as CanonicalResponse } from '../http-BkU-WJ0-.cjs';
import { G as GetClientLoansUseCase, a as GetClientLoansCommand, C as ClientLoan, b as GetLoanAdditionalInfoUseCase, c as GetLoanAdditionalInfoCommand, L as LoanAdditionalInfo, d as GetLoanAmortizationTableUseCase, e as GetLoanAmortizationTableCommand, f as LoanAmortizationTable, g as GetConsolidatedTimeDepositsUseCase, h as GetConsolidatedTimeDepositsCommand, T as TimeDeposit, i as GetDepositMovementsUseCase, j as GetDepositMovementsCommand, D as DepositMovement, S as SendSmsByIdentificationUseCase, k as SendSmsByIdentificationCommand, l as SendSmsByIdentificationResult, m as SendSmsByPhoneUseCase, n as SendSmsByPhoneCommand } from '../SendSmsByPhone.usecase-DIxI_xNU.cjs';
export { createExternalTransfer, createExternalTransferUseCase, createInternalTransfer, createInternalTransferUseCase, getListTransferInitialChargeUseCase, listTransferInitialCharge } from './transfer/index.cjs';
export { createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentReversal, processPaymentService } from './payment/index.cjs';
import '../GetClientProfileByNumber.usecase-BAxAif2U.cjs';
import '../AuthLogin.usecase-BK2V1xPg.cjs';
import '../PaymentServiceConcepts.usecase-KpV3j10r.cjs';
import '../ListCustomerProducts.usecase-DLFY0kje.cjs';
import '../GetAccountSigners.usecase-dJejXedc.cjs';
import '../CreateExternalTransfer.usecase-DSfKUlaD.cjs';
import '../ProcessPaymentReversal.usecase-DSqQp0k9.cjs';

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

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { n as ListAccountsCommand, A as Account, o as ListAccountsUseCase, i as GetAccountByNumberUseCase, G as GetAccountByNumberCommand, m as GetConsolidatedAccountsCommand, h as ConsolidatedAccountsUseCase, j as GetAccountMovementsCommand, a as AccountMovement, L as ListAccountMovementsUseCase, l as GetAccountSignersUseCase, k as GetAccountSignersCommand, d as AccountSignersInfo } from '../../GetAccountSigners.usecase-BIKu_oGT.js';

declare function createClientAccountsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListAccountsUseCase;
declare function clientAccounts(command: ListAccountsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<Account[]>>;

declare function createGetClientAccountByNumberUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetAccountByNumberUseCase;
declare function getClientAccountByNumber(command: GetAccountByNumberCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<Account>>;

declare function createConsolidatedAccountsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ConsolidatedAccountsUseCase;
declare function consolidatedAccounts(command: GetConsolidatedAccountsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<Account[]>>;

declare function createAccountMovementsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListAccountMovementsUseCase;
declare function accountMovements(command: GetAccountMovementsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountMovement[]>>;

declare function createAccountSignersUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetAccountSignersUseCase;
declare function getAccountSigners(command: GetAccountSignersCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountSignersInfo>>;

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getClientAccountByNumber };

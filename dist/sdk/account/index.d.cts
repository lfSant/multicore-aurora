import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';
import { r as ListAccountsCommand, A as Account, s as ListAccountsUseCase, j as GetAccountByNumberUseCase, G as GetAccountByNumberCommand, q as GetConsolidatedAccountsCommand, i as ConsolidatedAccountsUseCase, k as GetAccountMovementsCommand, b as AccountMovement, L as ListAccountMovementsUseCase, m as GetAccountSignersUseCase, l as GetAccountSignersCommand, e as AccountSignersInfo, p as GetAccountsForCausalsUseCase, n as GetAccountsForCausalsCommand, a as AccountForCausalResult } from '../../GetAccountsForCausals.usecase-DN7ZXmKW.cjs';

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

declare function createGetAccountsForCausalsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetAccountsForCausalsUseCase;
declare function getAccountsForCausals(command: GetAccountsForCausalsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountForCausalResult>>;

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createGetAccountsForCausalsUseCase, createGetClientAccountByNumberUseCase, getAccountSigners, getAccountsForCausals, getClientAccountByNumber };

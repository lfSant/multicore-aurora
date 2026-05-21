import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import { N as ListAccountsCommand, A as Account, O as ListAccountsUseCase, B as GetAccountByNumberUseCase, z as GetAccountByNumberCommand, J as GetConsolidatedAccountsCommand, p as ConsolidatedAccountsUseCase, E as GetAccountMovementsCommand, c as AccountMovement, M as ListAccountMovementsUseCase, I as GetAccountSignersUseCase, H as GetAccountSignersCommand, l as AccountSignersInfo, Y as ValidateCreateAccountPlusUseCase, X as ValidateCreateAccountPlusCommand, i as AccountPlusValidation, Z as ValidateCreateAccountUseCase, W as ValidateCreateAccountCommand, a as AccountCreationValidation, $ as ValidateDocumentUseCase, _ as ValidateDocumentCommand, D as DocumentValidation, V as SubmitPepsInformationUseCase, U as SubmitPepsInformationCommand, R as PepsInformationSubmission, T as SubmitFiscalResidenceUseCase, S as SubmitFiscalResidenceCommand, x as FiscalResidenceSubmission, L as GetFiscalResidenceUseCase, K as GetFiscalResidenceCommand, F as FiscalResidence, q as CreateAccountPlusCommand, e as AccountPlusCreation, r as CreateAccountPlusUseCase, y as GenerateAccountPlusDocumentsPdfUseCase, G as GenerateAccountPlusDocumentsPdfCommand, g as AccountPlusDocuments } from '../../GenerateAccountPlusDocumentsPdf.usecase-DM3d53WX.js';

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

declare function createValidateCreateAccountPlusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateCreateAccountPlusUseCase;
declare function validateCreateAccountPlus(command: ValidateCreateAccountPlusCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountPlusValidation>>;

declare function createValidateCreateAccountUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateCreateAccountUseCase;
declare function validateCreateAccount(command: ValidateCreateAccountCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountCreationValidation>>;

declare function createValidateDocumentUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ValidateDocumentUseCase;
declare function validateDocument(command: ValidateDocumentCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<DocumentValidation>>;

declare function createSubmitPepsInformationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitPepsInformationUseCase;
declare function submitPepsInformation(command: SubmitPepsInformationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PepsInformationSubmission>>;

declare function createSubmitFiscalResidenceUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitFiscalResidenceUseCase;
declare function submitFiscalResidence(command: SubmitFiscalResidenceCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<FiscalResidenceSubmission>>;

declare function createGetFiscalResidenceUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetFiscalResidenceUseCase;
declare function getFiscalResidence(command: GetFiscalResidenceCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<FiscalResidence>>;

declare function createCreateAccountPlusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateAccountPlusUseCase;
declare function createAccountPlus(command: CreateAccountPlusCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountPlusCreation>>;

declare function createGenerateAccountPlusDocumentsPdfUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GenerateAccountPlusDocumentsPdfUseCase;
declare function generateAccountPlusDocumentsPdf(command: GenerateAccountPlusDocumentsPdfCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountPlusDocuments>>;

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createGenerateAccountPlusDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createSubmitFiscalResidenceUseCase, createSubmitPepsInformationUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, submitFiscalResidence, submitPepsInformation, validateCreateAccount, validateCreateAccountPlus, validateDocument };

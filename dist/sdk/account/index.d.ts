import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import { R as ListAccountsCommand, A as Account, S as ListAccountsUseCase, J as GetAccountByNumberUseCase, I as GetAccountByNumberCommand, N as GetConsolidatedAccountsCommand, s as ConsolidatedAccountsUseCase, K as GetAccountMovementsCommand, c as AccountMovement, Q as ListAccountMovementsUseCase, M as GetAccountSignersUseCase, L as GetAccountSignersCommand, l as AccountSignersInfo, a8 as ValidateCreateAccountPlusUseCase, a7 as ValidateCreateAccountPlusCommand, i as AccountPlusValidation, a9 as ValidateCreateAccountUseCase, a6 as ValidateCreateAccountCommand, a as AccountCreationValidation, ab as ValidateDocumentUseCase, aa as ValidateDocumentCommand, D as DocumentValidation, a1 as SubmitBasicInformationUseCase, a0 as SubmitBasicInformationCommand, B as BasicInformationSubmission, a5 as SubmitPepsInformationUseCase, a4 as SubmitPepsInformationCommand, _ as PepsInformationSubmission, X as PepsAccountOpeningUseCase, V as PepsAccountOpeningCommand, U as PepsAccountOpening, a3 as SubmitFiscalResidenceUseCase, a2 as SubmitFiscalResidenceCommand, E as FiscalResidenceSubmission, P as GetFiscalResidenceUseCase, O as GetFiscalResidenceCommand, F as FiscalResidence, t as CreateAccountPlusCommand, e as AccountPlusCreation, u as CreateAccountPlusUseCase, H as GenerateAccountPlusDocumentsPdfUseCase, G as GenerateAccountPlusDocumentsPdfCommand, g as AccountPlusDocuments } from '../../PepsAccountOpening.usecase-pOTpjUle.js';

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

declare function createSubmitBasicInformationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitBasicInformationUseCase;
declare function submitBasicInformation(command: SubmitBasicInformationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<BasicInformationSubmission>>;

declare function createSubmitPepsInformationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitPepsInformationUseCase;
declare function submitPepsInformation(command: SubmitPepsInformationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PepsInformationSubmission>>;

declare function createPepsAccountOpeningUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): PepsAccountOpeningUseCase;
declare function pepsAccountOpening(command: PepsAccountOpeningCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PepsAccountOpening>>;

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

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createGenerateAccountPlusDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createPepsAccountOpeningUseCase, createSubmitBasicInformationUseCase, createSubmitFiscalResidenceUseCase, createSubmitPepsInformationUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, pepsAccountOpening, submitBasicInformation, submitFiscalResidence, submitPepsInformation, validateCreateAccount, validateCreateAccountPlus, validateDocument };

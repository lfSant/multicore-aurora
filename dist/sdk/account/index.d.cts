import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { a2 as ListAccountsCommand, A as Account, a3 as ListAccountsUseCase, T as GetAccountByNumberUseCase, S as GetAccountByNumberCommand, X as GetConsolidatedAccountsCommand, t as ConsolidatedAccountsUseCase, U as GetAccountMovementsCommand, c as AccountMovement, a1 as ListAccountMovementsUseCase, W as GetAccountSignersUseCase, V as GetAccountSignersCommand, l as AccountSignersInfo, at as ValidateCreateAccountPlusUseCase, as as ValidateCreateAccountPlusCommand, i as AccountPlusValidation, au as ValidateCreateAccountUseCase, ar as ValidateCreateAccountCommand, a as AccountCreationValidation, aw as ValidateDocumentUseCase, av as ValidateDocumentCommand, D as DocumentValidation, ah as SubmitBasicInformationUseCase, ag as SubmitBasicInformationCommand, n as BasicInformationSubmission, an as SubmitPepsInformationUseCase, am as SubmitPepsInformationCommand, ab as PepsInformationSubmission, a8 as PepsAccountOpeningUseCase, a6 as PepsAccountOpeningCommand, a5 as PepsAccountOpening, aj as SubmitFiscalResidenceUseCase, ai as SubmitFiscalResidenceCommand, N as FiscalResidenceSubmission, al as SubmitLaborInformationUseCase, ak as SubmitLaborInformationCommand, $ as LaborInformationSubmission, ap as SubmitReferenceDataUseCase, ao as SubmitReferenceDataCommand, ad as ReferenceDataSubmission, Z as GetFiscalResidenceUseCase, Y as GetFiscalResidenceCommand, I as FiscalResidence, u as CreateAccountPlusCommand, e as AccountPlusCreation, v as CreateAccountPlusUseCase, P as GenerateAccountPlusDocumentsPdfUseCase, O as GenerateAccountPlusDocumentsPdfCommand, g as AccountPlusDocuments, x as CreateElectronicAccountUseCase, w as CreateElectronicAccountCommand, z as ElectronicAccount, R as GenerateElectronicAccountDocumentsPdfUseCase, Q as GenerateElectronicAccountDocumentsPdfCommand, F as ElectronicAccountDocuments } from '../../PepsAccountOpening.usecase-BXfNLTXZ.cjs';

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

declare function createSubmitLaborInformationUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitLaborInformationUseCase;
declare function submitLaborInformation(command: SubmitLaborInformationCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<LaborInformationSubmission>>;

declare function createSubmitReferenceDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): SubmitReferenceDataUseCase;
declare function submitReferenceData(command: SubmitReferenceDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ReferenceDataSubmission>>;

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

declare function createCreateElectronicAccountUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateElectronicAccountUseCase;
declare function createElectronicAccount(command: CreateElectronicAccountCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ElectronicAccount>>;

declare function createGenerateElectronicAccountDocumentsPdfUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GenerateElectronicAccountDocumentsPdfUseCase;
declare function generateElectronicAccountDocumentsPdf(command: GenerateElectronicAccountDocumentsPdfCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ElectronicAccountDocuments>>;

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createCreateElectronicAccountUseCase, createElectronicAccount, createGenerateAccountPlusDocumentsPdfUseCase, createGenerateElectronicAccountDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createPepsAccountOpeningUseCase, createSubmitBasicInformationUseCase, createSubmitFiscalResidenceUseCase, createSubmitLaborInformationUseCase, createSubmitPepsInformationUseCase, createSubmitReferenceDataUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, generateElectronicAccountDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, pepsAccountOpening, submitBasicInformation, submitFiscalResidence, submitLaborInformation, submitPepsInformation, submitReferenceData, validateCreateAccount, validateCreateAccountPlus, validateDocument };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse, P as ProviderResult } from '../../types-DZJuEFLS.cjs';
import { W as ListAccountsCommand, A as Account, X as ListAccountsUseCase, L as GetAccountByNumberUseCase, K as GetAccountByNumberCommand, P as GetConsolidatedAccountsCommand, t as ConsolidatedAccountsUseCase, M as GetAccountMovementsCommand, c as AccountMovement, V as ListAccountMovementsUseCase, O as GetAccountSignersUseCase, N as GetAccountSignersCommand, l as AccountSignersInfo, al as ValidateCreateAccountPlusUseCase, ak as ValidateCreateAccountPlusCommand, i as AccountPlusValidation, am as ValidateCreateAccountUseCase, aj as ValidateCreateAccountCommand, a as AccountCreationValidation, ao as ValidateDocumentUseCase, an as ValidateDocumentCommand, D as DocumentValidation, a9 as SubmitBasicInformationUseCase, a8 as SubmitBasicInformationCommand, n as BasicInformationSubmission, af as SubmitPepsInformationUseCase, ae as SubmitPepsInformationCommand, a3 as PepsInformationSubmission, a0 as PepsAccountOpeningUseCase, _ as PepsAccountOpeningCommand, Z as PepsAccountOpening, ab as SubmitFiscalResidenceUseCase, aa as SubmitFiscalResidenceCommand, H as FiscalResidenceSubmission, ad as SubmitLaborInformationUseCase, ac as SubmitLaborInformationCommand, T as LaborInformationSubmission, ah as SubmitReferenceDataUseCase, ag as SubmitReferenceDataCommand, a5 as ReferenceDataSubmission, R as GetFiscalResidenceUseCase, Q as GetFiscalResidenceCommand, F as FiscalResidence, u as CreateAccountPlusCommand, e as AccountPlusCreation, v as CreateAccountPlusUseCase, J as GenerateAccountPlusDocumentsPdfUseCase, I as GenerateAccountPlusDocumentsPdfCommand, g as AccountPlusDocuments } from '../../PepsAccountOpening.usecase-h4i1bzoh.cjs';

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

interface ElectronicAccount {
    accountNumber: string;
    clientCoreCode: string;
    advisorName: string;
    advisorEmail: string;
}

interface CreateElectronicAccountCommand {
    clientIdentification: string;
    clientPlatform: string;
    creationDate: string;
    device: string;
    reference: string;
    clientCoreCode?: number;
    clientUsername?: string;
    clientIdentificationType?: string;
}

interface ElectronicAccountProviderPort {
    createElectronicAccount(cmd: CreateElectronicAccountCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ElectronicAccount>>;
}

declare class CreateElectronicAccountUseCase {
    private readonly provider;
    constructor(provider: ElectronicAccountProviderPort);
    execute(cmd: CreateElectronicAccountCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ElectronicAccount>>;
}

declare function createCreateElectronicAccountUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateElectronicAccountUseCase;
declare function createElectronicAccount(command: CreateElectronicAccountCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ElectronicAccount>>;

export { accountMovements, clientAccounts, consolidatedAccounts, createAccountMovementsUseCase, createAccountPlus, createAccountSignersUseCase, createClientAccountsUseCase, createConsolidatedAccountsUseCase, createCreateAccountPlusUseCase, createCreateElectronicAccountUseCase, createElectronicAccount, createGenerateAccountPlusDocumentsPdfUseCase, createGetClientAccountByNumberUseCase, createGetFiscalResidenceUseCase, createPepsAccountOpeningUseCase, createSubmitBasicInformationUseCase, createSubmitFiscalResidenceUseCase, createSubmitLaborInformationUseCase, createSubmitPepsInformationUseCase, createSubmitReferenceDataUseCase, createValidateCreateAccountPlusUseCase, createValidateCreateAccountUseCase, createValidateDocumentUseCase, generateAccountPlusDocumentsPdf, getAccountSigners, getClientAccountByNumber, getFiscalResidence, pepsAccountOpening, submitBasicInformation, submitFiscalResidence, submitLaborInformation, submitPepsInformation, submitReferenceData, validateCreateAccount, validateCreateAccountPlus, validateDocument };

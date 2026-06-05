import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { n as StartCausalFlowUseCase, S as StartCausalFlowCommand, m as StartCausalFlowResult, i as CreateDebitNoteUseCase, f as CreateDebitNoteCommand, h as CreateDebitNoteResult, e as CreateCreditNoteUseCase, b as CreateCreditNoteCommand, d as CreateCreditNoteResult, k as GetAccountsForCausalsUseCase, G as GetAccountsForCausalsCommand, A as AccountForCausalResult, L as ListCausalsCatalogUseCase, C as CausalCatalogItem } from '../../ListCausalsCatalog.usecase-CsYGTDsk.cjs';

declare function createStartCausalFlowUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): StartCausalFlowUseCase;
declare function startCausalFlow(command: StartCausalFlowCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<StartCausalFlowResult>>;

declare function createCreateDebitNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateDebitNoteUseCase;
declare function createDebitNote(command: CreateDebitNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CreateDebitNoteResult>>;

declare function createCreateCreditNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreateCreditNoteUseCase;
declare function createCreditNote(command: CreateCreditNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CreateCreditNoteResult>>;

declare function createGetAccountsForCausalsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetAccountsForCausalsUseCase;
declare function getAccountsForCausals(command: GetAccountsForCausalsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<AccountForCausalResult>>;

declare function getListCausalsCatalogUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ListCausalsCatalogUseCase;
declare function listCausalsCatalog(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CausalCatalogItem>>;

export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, startCausalFlow };

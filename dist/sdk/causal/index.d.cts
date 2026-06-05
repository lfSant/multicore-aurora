import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import { u as StartCausalFlowUseCase, S as StartCausalFlowCommand, t as StartCausalFlowResult, i as CreateDebitNoteUseCase, f as CreateDebitNoteCommand, h as CreateDebitNoteResult, e as CreateCreditNoteUseCase, b as CreateCreditNoteCommand, d as CreateCreditNoteResult, r as ReverseDebitNoteUseCase, o as ReverseDebitNoteCommand, q as ReverseDebitNoteResult, n as ReverseCreditNoteUseCase, R as ReverseCreditNoteCommand, m as ReverseCreditNoteResult, k as GetAccountsForCausalsUseCase, G as GetAccountsForCausalsCommand, A as AccountForCausalResult, L as ListCausalsCatalogUseCase, C as CausalCatalogItem } from '../../ListCausalsCatalog.usecase-CURVpL41.cjs';

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

declare function createReverseDebitNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ReverseDebitNoteUseCase;
declare function reverseDebitNote(command: ReverseDebitNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ReverseDebitNoteResult>>;

declare function createReverseCreditNoteUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ReverseCreditNoteUseCase;
declare function reverseCreditNote(command: ReverseCreditNoteCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ReverseCreditNoteResult>>;

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

export { createCreateCreditNoteUseCase, createCreateDebitNoteUseCase, createCreditNote, createDebitNote, createGetAccountsForCausalsUseCase, createReverseCreditNoteUseCase, createReverseDebitNoteUseCase, createStartCausalFlowUseCase, getAccountsForCausals, getListCausalsCatalogUseCase, listCausalsCatalog, reverseCreditNote, reverseDebitNote, startCausalFlow };

import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { o as GetClientProfileUseCase, n as GetClientProfileCommand, f as ClientProfile, C as CheckClientActiveCommand, e as ClientActiveStatus, b as CheckClientActiveUseCase, m as GetClientProfileByNumberUseCase, l as GetClientProfileByNumberCommand, g as ClientProfileByNumber, k as GetCivilRegistryDataUseCase, G as GetCivilRegistryDataCommand, c as CivilRegistryData, A as AcceptTermsCommand, T as TermsAcceptance, a as AcceptTermsUseCase } from '../../AcceptTerms.usecase-oxDDWLqB.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import '../../CoreRequestContext-C5PImHcm.js';

declare function createClientProfileUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetClientProfileUseCase;
declare function getClientProfile(command: GetClientProfileCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ClientProfile>>;

declare function createClientStatusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CheckClientActiveUseCase;
declare function checkClientStatus(command: CheckClientActiveCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ClientActiveStatus>>;

declare function createClientProfileByNumberUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetClientProfileByNumberUseCase;
declare function getClientProfileByNumber(command: GetClientProfileByNumberCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ClientProfileByNumber>>;

declare function createGetCivilRegistryDataUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetCivilRegistryDataUseCase;
declare function getCivilRegistryData(command: GetCivilRegistryDataCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<CivilRegistryData>>;

declare function createAcceptTermsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): AcceptTermsUseCase;
declare function acceptTerms(command: AcceptTermsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<TermsAcceptance>>;

export { acceptTerms, checkClientStatus, createAcceptTermsUseCase, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber };

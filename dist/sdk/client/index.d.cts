import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.cjs';
import { q as GetClientProfileUseCase, p as GetClientProfileCommand, h as ClientProfile, C as CheckClientActiveCommand, e as ClientActiveStatus, b as CheckClientActiveUseCase, o as GetClientProfileByNumberUseCase, n as GetClientProfileByNumberCommand, i as ClientProfileByNumber, m as GetCivilRegistryDataUseCase, G as GetCivilRegistryDataCommand, c as CivilRegistryData, A as AcceptTermsCommand, T as TermsAcceptance, a as AcceptTermsUseCase, r as RegisterUserChannelUseCase, R as RegisterUserChannelCommand, f as ClientChannelRegistration } from '../../RegisterUserChannel.usecase-DCCjy-XO.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.cjs';
import '../../CoreRequestContext-C_H146tZ.cjs';

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

declare function createRegisterUserChannelUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): RegisterUserChannelUseCase;
declare function registerUserChannel(command: RegisterUserChannelCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ClientChannelRegistration>>;

export { acceptTerms, checkClientStatus, createAcceptTermsUseCase, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, createRegisterUserChannelUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber, registerUserChannel };

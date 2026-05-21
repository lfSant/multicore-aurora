import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { n as GetClientProfileUseCase, m as GetClientProfileCommand, e as ClientProfile, C as CheckClientActiveCommand, d as ClientActiveStatus, a as CheckClientActiveUseCase, l as GetClientProfileByNumberUseCase, k as GetClientProfileByNumberCommand, f as ClientProfileByNumber, j as GetCivilRegistryDataUseCase, G as GetCivilRegistryDataCommand, b as CivilRegistryData } from '../../GetCivilRegistryData.usecase-BZ-gwHEV.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';

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

export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, createGetCivilRegistryDataUseCase, getCivilRegistryData, getClientProfile, getClientProfileByNumber };

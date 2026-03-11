import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { j as GetClientProfileUseCase, i as GetClientProfileCommand, c as ClientProfile, C as CheckClientActiveCommand, b as ClientActiveStatus, a as CheckClientActiveUseCase, h as GetClientProfileByNumberUseCase, G as GetClientProfileByNumberCommand, d as ClientProfileByNumber } from '../../GetClientProfileByNumber.usecase-D4nQOFzs.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';

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

export { checkClientStatus, createClientProfileByNumberUseCase, createClientProfileUseCase, createClientStatusUseCase, getClientProfile, getClientProfileByNumber };

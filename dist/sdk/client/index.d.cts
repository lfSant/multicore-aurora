import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { b as GetClientProfileUseCase, G as GetClientProfileCommand, C as ClientProfile, f as CheckClientActiveUseCase, c as CheckClientActiveCommand, d as ClientActiveStatus, j as GetClientProfileByNumberUseCase, g as GetClientProfileByNumberCommand, h as ClientProfileByNumber } from '../../GetClientProfileByNumber.usecase-Dul49kWX.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';

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

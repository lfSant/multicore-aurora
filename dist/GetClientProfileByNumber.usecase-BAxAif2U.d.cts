import { P as ProviderCallConfig, a as ProviderResult, C as CanonicalResponse } from './http-BkU-WJ0-.cjs';

interface GetClientProfileCommand {
    clientIdentification: string;
}

interface ClientProfile {
    clientNumber: number;
    currencyCode: string;
    officeId: string;
    officeName: string;
    firstNames: string;
    lastNames: string;
    identification: string;
    identificationType: string;
    address: string;
    birthDateMs: number;
    countryCode: number;
    countryName: string;
    email: string;
    phone: string;
    tradeName: string;
    businessName: string;
    naturalPerson: boolean;
    gender: string;
    maritalStatusCode: string;
    educationTypeCode: string;
    professionCode: string;
    extras?: Record<string, unknown>;
}

interface ClientProfileProviderPort {
    getProfile(cmd: GetClientProfileCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientProfile>>;
}

declare class GetClientProfileUseCase {
    private readonly provider;
    constructor(provider: ClientProfileProviderPort);
    execute(cmd: GetClientProfileCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientProfile>>;
}

interface CheckClientActiveCommand {
    clientIdentification: string;
}

interface ClientActiveStatus {
    active: boolean;
}

interface ClientStatusProviderPort {
    existsActive(cmd: CheckClientActiveCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientActiveStatus>>;
}

declare class CheckClientActiveUseCase {
    private readonly provider;
    constructor(provider: ClientStatusProviderPort);
    execute(cmd: CheckClientActiveCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientActiveStatus>>;
}

interface GetClientProfileByNumberCommand {
    clientNumber: number;
}

interface ClientProfileByNumber {
    clientNumber: number;
    currencyCode: string;
    officeId: string;
    officeName: string;
    firstNames: string;
    lastNames: string;
    identification: string;
    identificationType: string;
    address: string;
    birthDateMs: number;
    countryCode: number;
    countryName: string;
    email: string;
    phone: string;
    tradeName: string;
    businessName: string;
    naturalPerson: boolean;
    gender: string;
    maritalStatusCode: string;
    educationTypeCode: string;
    professionCode: string;
    extras?: Record<string, unknown>;
}

interface ClientProfileByNumberProviderPort {
    getProfile(cmd: GetClientProfileByNumberCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientProfileByNumber>>;
}

declare class GetClientProfileByNumberUseCase {
    private readonly provider;
    constructor(provider: ClientProfileByNumberProviderPort);
    execute(cmd: GetClientProfileByNumberCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientProfileByNumber>>;
}

export { type ClientProfile as C, type GetClientProfileCommand as G, type ClientProfileProviderPort as a, GetClientProfileUseCase as b, type CheckClientActiveCommand as c, type ClientActiveStatus as d, type ClientStatusProviderPort as e, CheckClientActiveUseCase as f, type GetClientProfileByNumberCommand as g, type ClientProfileByNumber as h, type ClientProfileByNumberProviderPort as i, GetClientProfileByNumberUseCase as j };

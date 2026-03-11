import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';

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

export { type CheckClientActiveCommand as C, type GetClientProfileByNumberCommand as G, CheckClientActiveUseCase as a, type ClientActiveStatus as b, type ClientProfile as c, type ClientProfileByNumber as d, type ClientProfileByNumberProviderPort as e, type ClientProfileProviderPort as f, type ClientStatusProviderPort as g, GetClientProfileByNumberUseCase as h, type GetClientProfileCommand as i, GetClientProfileUseCase as j };

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

interface CivilRegistryData {
    identification: string;
    firstNames: string;
    lastNames: string;
    birthDateMs: number;
    issueDateMs?: number;
    deathDateMs?: number;
    gender: string;
    genderCode: string;
    maritalStatus: string;
    maritalStatusCode: string;
    address: string;
    educationLevel: string;
    educationLevelCode: string;
    profession: string;
    spouseName?: string;
    spouseId?: string;
    photoBase64: string;
    signatureBase64?: string;
}

interface GetCivilRegistryDataCommand {
    identification: string;
    fingerCode: string;
}

interface CivilRegistryDataProviderPort {
    getCivilRegistryData(cmd: GetCivilRegistryDataCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<CivilRegistryData>>;
}

declare class GetCivilRegistryDataUseCase {
    private readonly provider;
    constructor(provider: CivilRegistryDataProviderPort);
    execute(cmd: GetCivilRegistryDataCommand, http: ProviderCallConfig): Promise<CanonicalResponse<CivilRegistryData>>;
}

export { type CheckClientActiveCommand as C, type GetCivilRegistryDataCommand as G, CheckClientActiveUseCase as a, type CivilRegistryData as b, type CivilRegistryDataProviderPort as c, type ClientActiveStatus as d, type ClientProfile as e, type ClientProfileByNumber as f, type ClientProfileByNumberProviderPort as g, type ClientProfileProviderPort as h, type ClientStatusProviderPort as i, GetCivilRegistryDataUseCase as j, type GetClientProfileByNumberCommand as k, GetClientProfileByNumberUseCase as l, type GetClientProfileCommand as m, GetClientProfileUseCase as n };

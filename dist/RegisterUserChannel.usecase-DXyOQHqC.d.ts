import { C as CoreRequestContext } from './CoreRequestContext-C5PImHcm.js';
import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

interface GetClientProfileCommand {
    clientIdentification: string;
    context?: CoreRequestContext;
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
    email?: string;
    mobilePhone?: string;
    context?: CoreRequestContext;
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
    context?: CoreRequestContext;
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
    fingerCode?: string;
    firstNames: string;
    lastNames: string;
    birthDateMs: number;
    birthPlace?: string;
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

interface AcceptTermsCommand {
    clientIdentification: string;
    clientUsername: string;
    acceptsTerms: true;
    acceptsDataProtection: true;
    context?: CoreRequestContext;
}

interface TermsAcceptance {
    transactionStatus: boolean;
}

interface TermsAcceptanceProviderPort {
    acceptTerms(cmd: AcceptTermsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<TermsAcceptance>>;
}

declare class AcceptTermsUseCase {
    private readonly provider;
    constructor(provider: TermsAcceptanceProviderPort);
    execute(cmd: AcceptTermsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<TermsAcceptance>>;
}

interface RegisterUserChannelCommand {
    clientIdentification: string;
    email: string;
    mobilePhone: string;
    clientUsername: string;
    context?: CoreRequestContext;
}

interface ClientChannelRegistration {
    clientId: string;
    clientIdentification: string;
}

interface ClientChannelRegistrationProviderPort {
    registerUserChannel(cmd: RegisterUserChannelCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientChannelRegistration>>;
}

declare class RegisterUserChannelUseCase {
    private readonly provider;
    constructor(provider: ClientChannelRegistrationProviderPort);
    execute(cmd: RegisterUserChannelCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientChannelRegistration>>;
}

export { type AcceptTermsCommand as A, type CheckClientActiveCommand as C, type GetCivilRegistryDataCommand as G, type RegisterUserChannelCommand as R, type TermsAcceptance as T, AcceptTermsUseCase as a, CheckClientActiveUseCase as b, type CivilRegistryData as c, type CivilRegistryDataProviderPort as d, type ClientActiveStatus as e, type ClientChannelRegistration as f, type ClientChannelRegistrationProviderPort as g, type ClientProfile as h, type ClientProfileByNumber as i, type ClientProfileByNumberProviderPort as j, type ClientProfileProviderPort as k, type ClientStatusProviderPort as l, GetCivilRegistryDataUseCase as m, type GetClientProfileByNumberCommand as n, GetClientProfileByNumberUseCase as o, type GetClientProfileCommand as p, GetClientProfileUseCase as q, RegisterUserChannelUseCase as r, type TermsAcceptanceProviderPort as s };

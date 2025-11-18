import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.js';
import { b as MaritalStatusUseCase, M as MaritalStatus, d as EducationTypesUseCase, E as EducationTypes, f as ProfessionTypesUseCase, P as ProfessionTypes, i as PaymentServiceConceptsUseCase, g as PaymentServiceConcepts } from '../../PaymentServiceConcepts.usecase-C3a7xcrw.js';
import { P as ProviderCallConfig, C as CanonicalResponse } from '../../http-BkU-WJ0-.js';

declare function findMaritalStatusUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): MaritalStatusUseCase;
declare function getListMaritalStatus(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<MaritalStatus[]>>;

declare function findEducationTypesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): EducationTypesUseCase;
declare function getListEducationTypes(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<EducationTypes[]>>;

declare function findProfessionalTypesUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProfessionTypesUseCase;
declare function getListProfessionalTypes(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProfessionTypes[]>>;

declare function findPaymentServiceConceptsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): PaymentServiceConceptsUseCase;
declare function getPaymentServiceConcepts(http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentServiceConcepts[]>>;

export { findEducationTypesUseCase, findMaritalStatusUseCase, findPaymentServiceConceptsUseCase, findProfessionalTypesUseCase, getListEducationTypes, getListMaritalStatus, getListProfessionalTypes, getPaymentServiceConcepts };

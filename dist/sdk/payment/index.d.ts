import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-DZJuEFLS.js';
import { c as GetPaymentServiceQueryUseCase, b as GetPaymentServiceQueryCommand, k as PaymentServiceQueryResult, s as ProcessPaymentServiceUseCase, p as ProcessPaymentServiceCommand, r as ProcessPaymentServiceResult, a as GetPaymentReversalsUseCase, G as GetPaymentReversalsCommand, h as PaymentReversalsResult, o as ProcessPaymentReversalUseCase, l as ProcessPaymentReversalCommand, n as ProcessPaymentReversalResult, C as CreatePaymentOwnCardUseCase, P as PaymentOwnCardCommand, e as PaymentOwnCardResult } from '../../CreatePaymentOwnCard.usecase-CXMxSW4V.js';

declare function createPaymentServiceQueryUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetPaymentServiceQueryUseCase;
declare function getPaymentServiceQuery(command: GetPaymentServiceQueryCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentServiceQueryResult>>;

declare function createProcessPaymentServiceUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProcessPaymentServiceUseCase;
declare function processPaymentService(command: ProcessPaymentServiceCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProcessPaymentServiceResult>>;

declare function createPaymentReversalsUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): GetPaymentReversalsUseCase;
declare function getPaymentReversals(command: GetPaymentReversalsCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentReversalsResult>>;

declare function createProcessPaymentReversalUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): ProcessPaymentReversalUseCase;
declare function processPaymentReversal(command: ProcessPaymentReversalCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<ProcessPaymentReversalResult>>;

declare function createPaymentOwnCardUseCase(providerKey: string, operationKey?: string, adapterOptions?: AdapterFactoryOptions): CreatePaymentOwnCardUseCase;
declare function processPaymentOwnCard(command: PaymentOwnCardCommand, http: ProviderCallConfig, opts: {
    provider: string;
    operation?: string;
    adapterOptions?: AdapterFactoryOptions;
}): Promise<CanonicalResponse<PaymentOwnCardResult>>;

export { createPaymentOwnCardUseCase, createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentOwnCard, processPaymentReversal, processPaymentService };

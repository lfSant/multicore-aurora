import { A as AdapterFactoryOptions } from '../../factories-Hv_6KkfJ.js';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.js';
import { C as CanonicalResponse } from '../../types-D11BfpWV.js';
import { c as GetPaymentServiceQueryUseCase, G as GetPaymentServiceQueryCommand, a as PaymentServiceQueryResult, g as ProcessPaymentServiceUseCase, d as ProcessPaymentServiceCommand, e as ProcessPaymentServiceResult, l as GetPaymentReversalsUseCase, h as GetPaymentReversalsCommand, j as PaymentReversalsResult, p as ProcessPaymentReversalUseCase, m as ProcessPaymentReversalCommand, n as ProcessPaymentReversalResult, C as CreatePaymentOwnCardUseCase, q as PaymentOwnCardCommand, r as PaymentOwnCardResult } from '../../CreatePaymentOwnCard.usecase-DO3YLjMd.js';

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

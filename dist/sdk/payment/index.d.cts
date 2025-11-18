import { A as AdapterFactoryOptions } from '../../factories-BT5sFmip.cjs';
import { P as ProviderCallConfig } from '../../http-CRaj6wih.cjs';
import { C as CanonicalResponse } from '../../types-D11BfpWV.cjs';
import { c as GetPaymentServiceQueryUseCase, G as GetPaymentServiceQueryCommand, a as PaymentServiceQueryResult, g as ProcessPaymentServiceUseCase, d as ProcessPaymentServiceCommand, e as ProcessPaymentServiceResult, l as GetPaymentReversalsUseCase, h as GetPaymentReversalsCommand, j as PaymentReversalsResult, p as ProcessPaymentReversalUseCase, m as ProcessPaymentReversalCommand, n as ProcessPaymentReversalResult } from '../../ProcessPaymentReversal.usecase-8U5A1FyQ.cjs';

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

export { createPaymentReversalsUseCase, createPaymentServiceQueryUseCase, createProcessPaymentReversalUseCase, createProcessPaymentServiceUseCase, getPaymentReversals, getPaymentServiceQuery, processPaymentReversal, processPaymentService };

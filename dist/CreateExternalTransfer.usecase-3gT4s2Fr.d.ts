import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';

type TransferInitialChargeCategory = 'CONCEPT_TRANSACTION' | 'ACCOUNT_TYPE' | 'INSTITUTION_INFO';
interface ItemTransferInitialCharge {
    productCategory: TransferInitialChargeCategory;
    codeConceptTransaction?: string;
    paymentOrderCode?: string;
    nameConceptTransaction?: string;
    codeAccountType?: string;
    nameAccountType?: string;
    sequentialInstitution?: number;
    nameInstitution?: string;
}
interface TransferInitialChargeBuckets {
    conceptTransactions: ItemTransferInitialCharge[];
    accountTypes: ItemTransferInitialCharge[];
    institutionInformations: ItemTransferInitialCharge[];
}

interface TransferInitialChargeProviderPort {
    getTransferInitialCharge(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ItemTransferInitialCharge>>;
}

declare class ListTransferInitialChargeProductsUseCase {
    private readonly provider;
    constructor(provider: TransferInitialChargeProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<TransferInitialChargeBuckets>>;
}

interface InternalTransferCommand {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    platform?: string;
    date?: string;
    ipTransaction?: string;
    identifierDevice?: string;
    codeReference?: string;
    subType?: string;
}

interface InternalTransferResult {
    date?: string;
    transactionIdentifier: string;
    state?: boolean;
    message?: string;
}

interface InternalTransferProviderPort {
    createInternalTransfer(cmd: InternalTransferCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<InternalTransferResult>>;
}

declare class CreateInternalTransferUseCase {
    private readonly provider;
    constructor(provider: InternalTransferProviderPort);
    execute(cmd: InternalTransferCommand, http: ProviderCallConfig): Promise<CanonicalResponse<InternalTransferResult>>;
}

interface ExternalTransferCommand {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    destinationIdentification: string;
    originIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
    concept: string;
    platform?: string;
    date?: string;
    ipTransaction?: string;
    identifierDevice?: string;
    codeReference?: string;
    clientNumber?: string;
    subType?: string;
}

interface ExternalTransferResult {
    date?: string;
    transactionIdentifier: string;
    state?: boolean;
    message?: string;
}

interface ExternalTransferProviderPort {
    createExternalTransfer(cmd: ExternalTransferCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ExternalTransferResult>>;
}

declare class CreateExternalTransferUseCase {
    private readonly provider;
    constructor(provider: ExternalTransferProviderPort);
    execute(cmd: ExternalTransferCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ExternalTransferResult>>;
}

export { CreateInternalTransferUseCase as C, type ExternalTransferCommand as E, type ItemTransferInitialCharge as I, ListTransferInitialChargeProductsUseCase as L, type TransferInitialChargeCategory as T, type TransferInitialChargeBuckets as a, type TransferInitialChargeProviderPort as b, type InternalTransferCommand as c, type InternalTransferResult as d, type InternalTransferProviderPort as e, type ExternalTransferResult as f, type ExternalTransferProviderPort as g, CreateExternalTransferUseCase as h };

import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.cjs';

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
    platformCode?: string;
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
    causal?: string;
    destinationIdentificationType?: string;
    platform?: string;
    platformCode?: string;
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

interface ValidateBeneficiaryCommand {
    sourceClientIdentification: string;
    destinationClientIdentification: string;
    destinationClientIdentificationType: string;
    destinationAccountNumber: string;
    destinationAccountTypeCode: string;
    destinationInstitutionCode: string;
}

interface BeneficiaryValidationResult {
    success: boolean;
    data: BeneficiaryValidationData;
}
interface BeneficiaryValidationData {
    beneficiaryName: string;
    normalizedBeneficiaryName: string;
    destinationAccount: DestinationAccountInfo;
}
interface DestinationAccountInfo {
    accountNumber: string;
    accountTypeCode: string;
    institutionCode: string;
    providerCode: string;
    providerName: string;
    institutionName: string;
}

interface BeneficiaryValidationProviderPort {
    validateBeneficiary(cmd: ValidateBeneficiaryCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<BeneficiaryValidationResult>>;
}

declare class BeneficiaryValidationUseCase {
    private readonly provider;
    constructor(provider: BeneficiaryValidationProviderPort);
    execute(cmd: ValidateBeneficiaryCommand, http: ProviderCallConfig): Promise<CanonicalResponse<BeneficiaryValidationResult>>;
}

export { type BeneficiaryValidationData as B, CreateExternalTransferUseCase as C, type DestinationAccountInfo as D, type ExternalTransferCommand as E, type InternalTransferCommand as I, ListTransferInitialChargeProductsUseCase as L, type TransferInitialChargeBuckets as T, type ValidateBeneficiaryCommand as V, type BeneficiaryValidationProviderPort as a, type BeneficiaryValidationResult as b, BeneficiaryValidationUseCase as c, CreateInternalTransferUseCase as d, type ExternalTransferProviderPort as e, type ExternalTransferResult as f, type InternalTransferProviderPort as g, type InternalTransferResult as h, type ItemTransferInitialCharge as i, type TransferInitialChargeCategory as j, type TransferInitialChargeProviderPort as k };

import { P as ProviderCallConfig } from './http-CRaj6wih.js';
import { P as ProviderResult, C as CanonicalResponse } from './types-DZJuEFLS.js';

interface UpdateContractStatusCommand {
    clientCoreCode: string;
    clientIdentificationType: string;
    contractCode: string;
    contractStatus: boolean;
    transactionPlatform: string;
    transactionIp: string;
    transactionDate: string;
    contractVersion: string;
    contractMd5?: string;
}

interface ContractStatusUpdate {
    transactionStatus: boolean;
}

interface ContractStatusUpdateProviderPort {
    updateContractStatus(cmd: UpdateContractStatusCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ContractStatusUpdate>>;
}

declare class UpdateContractStatusUseCase {
    private readonly provider;
    constructor(provider: ContractStatusUpdateProviderPort);
    execute(cmd: UpdateContractStatusCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ContractStatusUpdate>>;
}

interface GetUserDataCommand {
    username?: string;
    identification?: string;
    password?: string;
    channel: string;
}

interface SecurityQuestion {
    questionId: number;
    question: string;
    answerId?: number;
    answer?: string;
    personalAnswer?: string;
}
interface UserPersonalData {
    names: string;
    firstName: string;
    firstLastName: string;
    secondLastName: string;
    birthDateMs: number;
    maritalStatus: string;
    address: string;
}
interface UserContactData {
    phoneNumber: string;
    email: string;
}
interface UserSecurityData {
    image: string;
    imageAlias: string;
    questions: SecurityQuestion[];
}
interface UserAccountData {
    creationDateMs: number;
    lastPasswordChangeDateMs: number;
    officeCode: string;
    limits: unknown[];
    dataUsageAcceptance: boolean;
    lastLoginDateMs: number;
}
interface UserDataResult {
    username: string;
    identification: string;
    clientNumber: string;
    personal: UserPersonalData;
    contact: UserContactData;
    security: UserSecurityData;
    account: UserAccountData;
}

interface GetUserDataProviderPort {
    getUserData(cmd: GetUserDataCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<UserDataResult>>;
}

declare class GetUserDataUseCase {
    private readonly provider;
    constructor(provider: GetUserDataProviderPort);
    execute(cmd: GetUserDataCommand, http: ProviderCallConfig): Promise<CanonicalResponse<UserDataResult>>;
}

interface GetUserBeneficiariesCommand {
    username: string;
    password?: string;
    channel: string;
}

interface UserBeneficiaryResult {
    clientNumber: number;
    accountType: string;
    accountNumber: string;
    registrationDateMs: number;
    bankCode: number;
    beneficiaryIdentification: string;
    beneficiaryFirstName: string;
    beneficiaryLastName: string;
    beneficiarySecondLastName?: string;
    beneficiaryEmail: string;
    beneficiaryType: string;
    beneficiaryPhone: string;
    bank?: string;
}

interface GetUserBeneficiariesProviderPort {
    getUserBeneficiaries(cmd: GetUserBeneficiariesCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<UserBeneficiaryResult>>;
}

declare class GetUserBeneficiariesUseCase {
    private readonly provider;
    constructor(provider: GetUserBeneficiariesProviderPort);
    execute(cmd: GetUserBeneficiariesCommand, http: ProviderCallConfig): Promise<CanonicalResponse<UserBeneficiaryResult>>;
}

export { type ContractStatusUpdate as C, type GetUserBeneficiariesCommand as G, type SecurityQuestion as S, type UpdateContractStatusCommand as U, type ContractStatusUpdateProviderPort as a, type GetUserBeneficiariesProviderPort as b, GetUserBeneficiariesUseCase as c, type GetUserDataCommand as d, type GetUserDataProviderPort as e, GetUserDataUseCase as f, UpdateContractStatusUseCase as g, type UserAccountData as h, type UserBeneficiaryResult as i, type UserContactData as j, type UserDataResult as k, type UserPersonalData as l, type UserSecurityData as m };

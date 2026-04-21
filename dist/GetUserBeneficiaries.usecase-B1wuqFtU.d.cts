import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';
import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';

interface GetUserDataCommand {
    username: string;
    password: string;
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

export { type GetUserBeneficiariesCommand as G, type SecurityQuestion as S, type UserAccountData as U, type GetUserBeneficiariesProviderPort as a, GetUserBeneficiariesUseCase as b, type GetUserDataCommand as c, type GetUserDataProviderPort as d, GetUserDataUseCase as e, type UserBeneficiaryResult as f, type UserContactData as g, type UserDataResult as h, type UserPersonalData as i, type UserSecurityData as j };

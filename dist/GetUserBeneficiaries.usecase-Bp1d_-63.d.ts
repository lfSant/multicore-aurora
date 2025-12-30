import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.js';
import { P as ProviderCallConfig } from './http-CRaj6wih.js';

interface GetUserDataCommand {
    username: string;
    channel: string;
}

interface SecurityQuestion {
    questionId: number;
    question: string;
    answerId: number | null;
    answer: string | null;
    personalAnswer: string | null;
}
interface UserDataResult {
    username: string;
    identification: string;
    phoneNumber: string;
    email: string;
    creationDate: string;
    lastPasswordChange: string;
    securityImage: string;
    securityImageAlias: string;
    securityQuestions: SecurityQuestion[];
    limitDay: string;
    limitWeek: string;
    limitMonth: string;
    names: string | null;
    firstName: string | null;
    secondName: string | null;
    firstLastName: string | null;
    secondLastName: string | null;
    birthDate: string;
    maritalStatus: string;
    address: string;
    officeCode: string;
    clientCode: string;
    dataUsageAcceptance: boolean;
    lastLogin: string;
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
    channel: string;
}

interface UserBeneficiaryResult {
    clientNumber: number;
    accountType: string;
    accountNumber: string;
    registrationDate: string;
    bankCode: number;
    beneficiaryIdentification: string;
    beneficiaryFirstName: string;
    beneficiaryLastName: string;
    beneficiarySecondLastName: string;
    beneficiaryEmail: string;
    beneficiaryType: string;
    beneficiaryPhone: string;
    bank: string | null;
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

export { type GetUserDataCommand as G, type SecurityQuestion as S, type UserDataResult as U, type GetUserDataProviderPort as a, GetUserDataUseCase as b, type GetUserBeneficiariesCommand as c, type UserBeneficiaryResult as d, type GetUserBeneficiariesProviderPort as e, GetUserBeneficiariesUseCase as f };

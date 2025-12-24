import { P as ProviderResult, C as CanonicalResponse } from './types-D11BfpWV.cjs';
import { P as ProviderCallConfig } from './http-CRaj6wih.cjs';

interface GetUserDataCommand {
    username: string;
    channel: string;
}

interface SecurityQuestion {
    questionId: number;
    answerId: number | null;
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

export { type GetUserDataCommand as G, type SecurityQuestion as S, type UserDataResult as U, type GetUserDataProviderPort as a, GetUserDataUseCase as b };

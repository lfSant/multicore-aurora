import { z } from 'zod';

interface ProviderResult<TItem = any> {
    items: TItem[];
    status: number;
    provider: string;
    raw?: {
        headersCore: any;
        dataCore: any;
    };
    aditionalData?: Record<string, any>;
}
interface CanonicalResponse<TItem = any> {
    success: boolean;
    code: string;
    messages: {
        client: string;
        server: string;
    };
    data: TItem[];
    timestamp: string;
    status: number;
    aditionalData: Record<string, any>;
    raw?: Array<{
        headersCore: any;
        dataCore: any;
    }>;
}

declare function successResponse<T>(items: T[], opts?: {
    client?: string;
    server?: string;
    status?: number;
    raw?: Array<{
        headersCore: any;
        dataCore: any;
    }>;
    aditionalData?: Record<string, any>;
}): CanonicalResponse<T>;
declare function errorResponse<T = never>(clientMsg: string, serverMsg: string, status: number, raw?: Array<{
    headersCore: any;
    dataCore: any;
}>): CanonicalResponse<T>;

interface ProviderCallConfig {
    baseUrl?: string;
    url?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeoutMs?: number;
    data?: unknown;
}
interface HttpResponse<T = any> {
    status: number;
    headers: Record<string, any>;
    data: T;
}

declare class ProviderHttpError extends Error {
    readonly status: number;
    readonly provider?: string | undefined;
    readonly raw?: {
        headersCore: any;
        dataCore: any;
        timeResponseMs?: number;
        urlRequest?: string;
        bodyRequest?: any;
        headersRequest?: any;
        paramsRequest?: any;
    } | undefined;
    readonly codeHint?: string | undefined;
    readonly clientMessage?: string | undefined;
    constructor(message: string, status: number, provider?: string | undefined, raw?: {
        headersCore: any;
        dataCore: any;
        timeResponseMs?: number;
        urlRequest?: string;
        bodyRequest?: any;
        headersRequest?: any;
        paramsRequest?: any;
    } | undefined, codeHint?: string | undefined, clientMessage?: string | undefined);
}
declare class MappingConfigError extends Error {
    details: string;
    constructor(details: string);
}

interface GetClientProfileCommand {
    clientIdentification: string;
}

interface ClientProfile {
    clientNumber: number;
    currencyCode: string;
    officeId: string;
    officeName: string;
    firstNames: string;
    lastNames: string;
    identification: string;
    identificationType: string;
    address: string;
    birthDateMs: number;
    countryCode: number;
    countryName: string;
    email: string;
    phone: string;
    tradeName: string;
    businessName: string;
    naturalPerson: boolean;
    gender: string;
    maritalStatusCode: string;
    educationTypeCode: string;
    professionCode: string;
    extras?: Record<string, unknown>;
}

interface ClientProfileProviderPort {
    getProfile(cmd: GetClientProfileCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientProfile>>;
}

declare class GetClientProfileUseCase {
    private readonly provider;
    constructor(provider: ClientProfileProviderPort);
    execute(cmd: GetClientProfileCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientProfile>>;
}

declare const GetClientProfileCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type GetClientProfileCommandParsed = z.infer<typeof GetClientProfileCommandSchema>;

interface CheckClientActiveCommand {
    clientIdentification: string;
}

interface ClientActiveStatus {
    active: boolean;
}

interface ClientStatusProviderPort {
    existsActive(cmd: CheckClientActiveCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientActiveStatus>>;
}

declare class CheckClientActiveUseCase {
    private readonly provider;
    constructor(provider: ClientStatusProviderPort);
    execute(cmd: CheckClientActiveCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientActiveStatus>>;
}

declare const CheckClientActiveCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;

interface AuthPrecheckCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}

interface AuthPrecheckStatus {
    allowed: boolean;
    cookie?: string;
}

interface AuthPrecheckProviderPort {
    preCheck(cmd: AuthPrecheckCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AuthPrecheckStatus>>;
}

declare class AuthPrecheckUseCase {
    private readonly provider;
    constructor(provider: AuthPrecheckProviderPort);
    execute(cmd: AuthPrecheckCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AuthPrecheckStatus>>;
}

declare const AuthPrecheckCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    atributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    atributes?: Record<string, any> | undefined;
}, {
    username: string;
    password: string;
    atributes?: Record<string, any> | undefined;
}>;
type AuthPrecheckCommandParsed = z.infer<typeof AuthPrecheckCommandSchema>;

interface AuthLoginCommand {
    username: string;
    password: string;
    attributes?: Record<string, any>;
}

interface AuthLogin {
    authenticated: boolean;
    accessToken: string;
    createdAt: Date;
    expiresAt?: Date;
    refreshToken?: string;
    refreshExpiresAt?: Date;
    terminalIp?: string;
    attributes?: Record<string, any>;
    clientCode?: string;
}

interface AuthLoginProviderPort {
    login(cmd: AuthLoginCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AuthLogin>>;
}

declare class AuthLoginUseCase {
    private readonly provider;
    constructor(provider: AuthLoginProviderPort);
    execute(cmd: AuthLoginCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AuthLogin>>;
}

declare const AuthLoginCommandSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    attributes?: Record<string, any> | undefined;
}, {
    username: string;
    password: string;
    attributes?: Record<string, any> | undefined;
}>;
type AuthLoginCommandParsed = z.infer<typeof AuthLoginCommandSchema>;

interface GetClientProfileByNumberCommand {
    clientNumber: number;
}

interface ClientProfileByNumber {
    clientNumber: number;
    currencyCode: string;
    officeId: string;
    officeName: string;
    firstNames: string;
    lastNames: string;
    identification: string;
    identificationType: string;
    address: string;
    birthDateMs: number;
    countryCode: number;
    countryName: string;
    email: string;
    phone: string;
    tradeName: string;
    businessName: string;
    naturalPerson: boolean;
    gender: string;
    maritalStatusCode: string;
    educationTypeCode: string;
    professionCode: string;
    extras?: Record<string, unknown>;
}

interface ClientProfileByNumberProviderPort {
    getProfile(cmd: GetClientProfileByNumberCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientProfileByNumber>>;
}

declare class GetClientProfileByNumberUseCase {
    private readonly provider;
    constructor(provider: ClientProfileByNumberProviderPort);
    execute(cmd: GetClientProfileByNumberCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientProfileByNumber>>;
}

declare const GetClientProfileByNumberCommandSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
}, {
    clientNumber: number;
}>;
type GetClientProfileByNumberCommandParsed = z.infer<typeof GetClientProfileByNumberCommandSchema>;

interface MaritalStatus {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface MaritalStatusProviderPort {
    getMaritalStatus(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<MaritalStatus[]>>;
}

declare class MaritalStatusUseCase {
    private readonly provider;
    constructor(provider: MaritalStatusProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<MaritalStatus[]>>;
}

interface EducationTypes {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface EducationTypesProviderPort {
    getEducationTypes(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<EducationTypes[]>>;
}

declare class EducationTypesUseCase {
    private readonly provider;
    constructor(provider: EducationTypesProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<EducationTypes[]>>;
}

interface ProfessionTypes {
    code: string;
    name: string;
    extras?: Record<string, any>;
}

interface ProfessionTypesProviderPort {
    getProfessionTypes(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProfessionTypes[]>>;
}

declare class ProfessionTypesUseCase {
    private readonly provider;
    constructor(provider: ProfessionTypesProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<ProfessionTypes[]>>;
}

interface ListCustomerProductsCommand {
    clientNumber: number | string;
}

type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN';
interface ConsolidatedProduct {
    productCategory: ProductCategory;
    accountNumber?: string;
    accountType?: string;
    currency?: string;
    holdBalance?: string;
    blockedBalance?: string;
    otherBalance?: string;
    pledgedBalance?: string;
    balance?: string;
    availableBalance?: string;
    operationalTransactionsAllowed?: boolean;
    status?: string;
    signatureType?: string;
    id?: string | number;
    code?: string;
    depositType?: string;
    maturityDate?: string;
    amount?: string;
    interestCollected?: string;
    frequency?: string | null;
    financialYield?: string;
    rate?: string;
    termDays?: number;
    openDate?: string;
    installments?: number;
    loanCode?: string;
    loanType?: string;
    currentBalance?: string;
    payoffAmount?: string;
    nextDueDate?: string;
    relationshipType?: string;
}
interface ConsolidatedBuckets {
    accounts: ConsolidatedProduct[];
    timeDeposits: ConsolidatedProduct[];
    loans: ConsolidatedProduct[];
}

interface ConsolidatedProductsProviderPort {
    listCustomerProducts(cmd: ListCustomerProductsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ConsolidatedProduct>>;
}

declare class ListCustomerProductsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedProductsProviderPort);
    execute(cmd: ListCustomerProductsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ConsolidatedBuckets>>;
}

declare const ListCustomerProductsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
}, {
    clientNumber: string | number;
}>;
type ListCustomerProductsCommandParsed = z.infer<typeof ListCustomerProductsCommandSchema>;

interface ListAccountsCommand {
    clientIdentification: string;
}

interface Account {
    accountNumber: string;
    accountType: string;
    status: string;
    currency: string;
    officeName?: string;
    openDate?: string;
    signatureType?: string;
    balance: string;
    availableBalance: string;
    holdBalance?: string;
    blockedBalance?: string;
    otherBalance?: string;
    pledgedBalance?: string;
    operationalTransactionsAllowed?: boolean | null;
    productCategory: 'ACCOUNT';
    extras?: Record<string, any>;
}

interface ClientAccountsProviderPort {
    clientAccounts(cmd: ListAccountsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account[]>>;
}

declare class ListAccountsUseCase {
    private readonly provider;
    constructor(provider: ClientAccountsProviderPort);
    execute(cmd: ListAccountsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account[]>>;
}

declare const ListAccountsCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
}, {
    clientIdentification: string;
}>;
type ListAccountsCommandParsed = z.infer<typeof ListAccountsCommandSchema>;

interface GetAccountByNumberCommand {
    accountNumber: string;
}

interface ClientAccountByNumberProviderPort {
    getAccountByNumber(cmd: GetAccountByNumberCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account>>;
}

declare class GetAccountByNumberUseCase {
    private readonly provider;
    constructor(provider: ClientAccountByNumberProviderPort);
    execute(cmd: GetAccountByNumberCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account>>;
}

declare const GetAccountByNumberCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;
type GetAccountByNumberCommandParsed = z.infer<typeof GetAccountByNumberCommandSchema>;

interface GetConsolidatedAccountsCommand {
    clientNumber: number | string;
}

interface ConsolidatedAccountsProviderPort {
    getConsolidatedAccounts(cmd: GetConsolidatedAccountsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<Account[]>>;
}

declare class ConsolidatedAccountsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedAccountsProviderPort);
    execute(cmd: GetConsolidatedAccountsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<Account[]>>;
}

declare const GetConsolidatedAccountsCommandSchema: z.ZodObject<{
    clientNumber: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    clientNumber: string | number;
}, {
    clientNumber: string | number;
}>;
type GetConsolidatedAccountsCommandParsed = z.infer<typeof GetConsolidatedAccountsCommandSchema>;

interface GetAccountMovementsCommand {
    accountNumber: string;
    startDate: string;
    endDate: string;
}

interface AccountMovement {
    date: string;
    reference: string;
    amount: string;
    balance: string;
    machineDate?: string;
    concept: string;
    cause?: string;
    office?: string;
    user?: string;
    movementType: 'DEBIT' | 'CREDIT';
    extras?: Record<string, any>;
}

interface AccountMovementsProviderPort {
    getAccountMovements(cmd: GetAccountMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountMovement[]>>;
}

declare class ListAccountMovementsUseCase {
    private readonly provider;
    constructor(provider: AccountMovementsProviderPort);
    execute(cmd: GetAccountMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountMovement[]>>;
}

declare const GetAccountMovementsCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    startDate: string;
    endDate: string;
}, {
    accountNumber: string;
    startDate: string;
    endDate: string;
}>;
type GetAccountMovementsCommandParsed = z.infer<typeof GetAccountMovementsCommandSchema>;

interface GetAccountSignersCommand {
    accountNumber: string;
}

interface AccountSigner {
    clientNumber: string;
    identificationDocument: string;
    firstName: string;
    lastName: string;
    signatureType: string;
    email: string;
    phoneNumber: string;
}
interface AccountSignersInfo {
    accountCode: string;
    accountType: string;
    signatureType: string;
    signers: AccountSigner[];
}

interface AccountSignersProviderPort {
    getAccountSigners(cmd: GetAccountSignersCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<AccountSignersInfo>>;
}

declare class GetAccountSignersUseCase {
    private readonly provider;
    constructor(provider: AccountSignersProviderPort);
    execute(cmd: GetAccountSignersCommand, http: ProviderCallConfig): Promise<CanonicalResponse<AccountSignersInfo>>;
}

declare const GetAccountSignersCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;

interface GetClientLoansCommand {
    clientNumber: number;
    companySequential?: number;
    isActive?: boolean;
}

interface ClientLoan {
    sequential: number;
    code: string;
    type: string;
    initialDebt: string;
    balance: string;
    disbursementDate: string;
    dueDate: string;
    status: string;
    installments: number;
    frequency: string;
    rate: string;
    advisor: string;
    lifeInsurance: string;
    clientName: string;
}

interface ClientLoansProviderPort {
    getClientLoans(cmd: GetClientLoansCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ClientLoan[]>>;
}

declare class GetClientLoansUseCase {
    private readonly provider;
    constructor(provider: ClientLoansProviderPort);
    execute(cmd: GetClientLoansCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ClientLoan[]>>;
}

declare const GetClientLoansCommandSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}>;

interface GetLoanAdditionalInfoCommand {
    loanSequential: number;
}

interface LoanAdditionalInfo {
    office: string;
    officer: string;
    currentBalance: string;
    lastPaymentDate: string;
    nextDueDate: string;
    amountToCancel: string;
    overdueInstallments: number;
    overdueDays: number;
    totalInstallmentAmount: string;
    amountUpToCurrentInstallment: string;
}

interface LoanAdditionalInfoProviderPort {
    getLoanAdditionalInfo(cmd: GetLoanAdditionalInfoCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LoanAdditionalInfo>>;
}

declare class GetLoanAdditionalInfoUseCase {
    private readonly provider;
    constructor(provider: LoanAdditionalInfoProviderPort);
    execute(cmd: GetLoanAdditionalInfoCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LoanAdditionalInfo>>;
}

declare const GetLoanAdditionalInfoSchema: z.ZodObject<{
    loanSequential: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    loanSequential: number;
}, {
    loanSequential: number;
}>;

interface GetLoanAmortizationTableCommand {
    loanSequential: number;
    companySequential?: number;
}

interface LoanInstallment {
    status: string;
    installmentNumber: number;
    dueDate: string;
    termDays: number;
    principal: string;
    interest: string;
    lifeInsurance: string;
    other: string;
    loanBalance: string;
    totalInstallment: string;
}
interface LoanAmortizationTable {
    clientName: string;
    initialDebt: string;
    loanBalance: string;
    office: string;
    disbursementDate: string;
    creditType: string;
    dueDate: string;
    accountingRating: string;
    numberOfInstallments: number;
    applicationNumber: number;
    paymentFrequency: string;
    creditNumber: string;
    rate: string;
    tea: string;
    installments: LoanInstallment[];
}

interface LoanAmortizationTableProviderPort {
    getLoanAmortizationTable(cmd: GetLoanAmortizationTableCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<LoanAmortizationTable>>;
}

declare class GetLoanAmortizationTableUseCase {
    private readonly provider;
    constructor(provider: LoanAmortizationTableProviderPort);
    execute(cmd: GetLoanAmortizationTableCommand, http: ProviderCallConfig): Promise<CanonicalResponse<LoanAmortizationTable>>;
}

declare const GetLoanAmortizationTableSchema: z.ZodObject<{
    loanSequential: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    loanSequential: number;
    companySequential?: number | undefined;
}, {
    loanSequential: number;
    companySequential?: number | undefined;
}>;

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
}

interface InternalTransferResult {
    date: string;
    transactionIdentifier: string;
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

declare const InternalTransferCommandSchema: z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    destinationAccountNumber: z.ZodString;
    amount: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
}>;
type InternalTransferCommandParsed = z.infer<typeof InternalTransferCommandSchema>;

interface ExternalTransferCommand {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    destinationIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
    concept: string;
}

interface ExternalTransferResult {
    date: string;
    transactionIdentifier: string;
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

declare const ExternalTransferCommandSchema: z.ZodObject<{
    accountNumberOrigin: z.ZodString;
    destinationAccountNumber: z.ZodString;
    amount: z.ZodString;
    destinationIdentification: z.ZodString;
    destinationName: z.ZodString;
    institutionSequential: z.ZodString;
    accountTypeCode: z.ZodString;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
}, {
    accountNumberOrigin: string;
    destinationAccountNumber: string;
    amount: string;
    concept: string;
    destinationIdentification: string;
    destinationName: string;
    institutionSequential: string;
    accountTypeCode: string;
}>;
type ExternalTransferCommandParsed = z.infer<typeof ExternalTransferCommandSchema>;

interface GetConsolidatedTimeDepositsCommand {
    clientNumber: number;
    companySequential?: number;
    isActive?: boolean;
}

interface TimeDeposit {
    sequential: number;
    code: string;
    depositType: string;
    currency: string;
    status: string;
    dueDate: string;
    amount: string;
    collectionInterestBalance: string;
    calculationInterestBalance: string;
}

interface ConsolidatedTimeDepositsProviderPort {
    getConsolidatedTimeDeposits(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<TimeDeposit[]>>;
}

declare class GetConsolidatedTimeDepositsUseCase {
    private readonly provider;
    constructor(provider: ConsolidatedTimeDepositsProviderPort);
    execute(cmd: GetConsolidatedTimeDepositsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<TimeDeposit[]>>;
}

declare const GetConsolidatedTimeDepositsSchema: z.ZodObject<{
    clientNumber: z.ZodNumber;
    companySequential: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}, {
    clientNumber: number;
    companySequential?: number | undefined;
    isActive?: boolean | undefined;
}>;

interface GetDepositMovementsCommand {
    depositSequential: number;
    startDate: string;
    endDate: string;
    companySequential?: number;
}

interface DepositMovement {
    date: string;
    document: string;
    transaction: string;
    amount: string;
    balance: string;
    causal: string;
    office: string;
    user: string;
}

interface DepositMovementsProviderPort {
    getDepositMovements(cmd: GetDepositMovementsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<DepositMovement[]>>;
}

declare class GetDepositMovementsUseCase {
    private readonly provider;
    constructor(provider: DepositMovementsProviderPort);
    execute(cmd: GetDepositMovementsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<DepositMovement[]>>;
}

declare const GetDepositMovementsSchema: z.ZodObject<{
    depositSequential: z.ZodNumber;
    startDate: z.ZodString;
    endDate: z.ZodString;
    companySequential: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}, {
    startDate: string;
    endDate: string;
    depositSequential: number;
    companySequential?: number | undefined;
}>;

/**
 * Command para enviar SMS a un cliente por su identificación
 */
interface SendSmsByIdentificationCommand {
    clientIdentification: string;
    message: string;
}

/**
 * Resultado del envío de SMS por identificación
 */
interface SendSmsByIdentificationResult {
    sent: boolean;
}

interface SendSmsByIdentificationProviderPort {
    sendSms(cmd: SendSmsByIdentificationCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

declare class SendSmsByIdentificationUseCase {
    private readonly provider;
    constructor(provider: SendSmsByIdentificationProviderPort);
    execute(cmd: SendSmsByIdentificationCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;
}

declare const SendSmsByIdentificationCommandSchema: z.ZodObject<{
    clientIdentification: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientIdentification: string;
    message: string;
}, {
    clientIdentification: string;
    message: string;
}>;
type SendSmsByIdentificationCommandParsed = z.infer<typeof SendSmsByIdentificationCommandSchema>;

/**
 * Command para enviar SMS a un número de teléfono
 */
interface SendSmsByPhoneCommand {
    phoneNumber: string;
    message: string;
}

interface SendSmsByPhoneProviderPort {
    sendSmsByPhone(cmd: SendSmsByPhoneCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<SendSmsByIdentificationResult>>;
}

declare class SendSmsByPhoneUseCase {
    private readonly provider;
    constructor(provider: SendSmsByPhoneProviderPort);
    execute(cmd: SendSmsByPhoneCommand, http: ProviderCallConfig): Promise<CanonicalResponse<SendSmsByIdentificationResult>>;
}

declare const SendSmsByPhoneCommandSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    phoneNumber: string;
}, {
    message: string;
    phoneNumber: string;
}>;
type SendSmsByPhoneCommandParsed = z.infer<typeof SendSmsByPhoneCommandSchema>;

interface PaymentServiceConcepts {
    code: string;
    name: string;
    identifier: string;
    product: string;
    category: string;
    subCategory?: string;
    codeCop?: string;
    commission?: string;
    status?: string;
    referenceLengthMax?: string;
    referenceLengthMin?: string;
    referenceDataType?: string;
    onlineReversal?: string;
    hasOtp?: string;
    controlType?: string;
    paymentType?: string;
    productType?: string;
    transactionType?: string;
    queryTrxType?: string;
    paymentTrxType?: string;
    reversalTrxType?: string;
    referenceTitle?: string;
    extras?: Record<string, any>;
}

interface PaymentServiceConceptsProviderPort {
    getPaymentServiceConcepts(http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentServiceConcepts[]>>;
}

declare class PaymentServiceConceptsUseCase {
    private readonly provider;
    constructor(provider: PaymentServiceConceptsProviderPort);
    execute(http: ProviderCallConfig): Promise<CanonicalResponse<PaymentServiceConcepts[]>>;
}

interface GetPaymentServiceQueryCommand {
    referenceNumber: string;
    identifier: string;
    clientNumber: number;
}

interface PaymentServiceQueryItemResult {
    commission: string;
    description: string;
    item: string;
    priority: number;
    value: number;
    valueWithCommission: number;
}
interface PaymentServiceQueryResult {
    items: PaymentServiceQueryItemResult[];
    transactionId: string;
    identification: string;
    name: string;
}

interface PaymentServiceQueryProviderPort {
    getPaymentServiceQuery(cmd: GetPaymentServiceQueryCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentServiceQueryResult>>;
}

declare class GetPaymentServiceQueryUseCase {
    private readonly provider;
    constructor(provider: PaymentServiceQueryProviderPort);
    execute(cmd: GetPaymentServiceQueryCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PaymentServiceQueryResult>>;
}

declare const GetPaymentServiceQueryCommandSchema: z.ZodObject<{
    referenceNumber: z.ZodString;
    identifier: z.ZodString;
    clientNumber: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    clientNumber: number;
    referenceNumber: string;
    identifier: string;
}, {
    clientNumber: number;
    referenceNumber: string;
    identifier: string;
}>;
type GetPaymentServiceQueryCommandParsed = z.infer<typeof GetPaymentServiceQueryCommandSchema>;

interface ProcessPaymentServiceCommand {
    accountNumber: string;
    identifier: string;
    referenceNumber: string;
    transactionId: string;
    itemId: string;
    amountToPay: number;
    concept: string;
}

interface ProcessPaymentServiceResult {
    transactionDateTime: string;
    paymentCode: string;
    transactionCode: string;
    authorizationCode: string;
    product: string;
    traceCode: string;
    invoice: string;
    terminal: string;
    switchSequence: string;
    identification: string;
    invoiceUrl: string;
    acquirerSequence: string;
    compensationDate: string;
    xmlReceipt: string;
    receiptLines?: string[];
    receiptObject?: Record<string, string>;
}

interface ProcessPaymentServiceProviderPort {
    processPaymentService(cmd: ProcessPaymentServiceCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessPaymentServiceResult>>;
}

declare class ProcessPaymentServiceUseCase {
    private readonly provider;
    constructor(provider: ProcessPaymentServiceProviderPort);
    execute(cmd: ProcessPaymentServiceCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessPaymentServiceResult>>;
}

declare const ProcessPaymentServiceCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    identifier: z.ZodString;
    referenceNumber: z.ZodString;
    transactionId: z.ZodString;
    itemId: z.ZodString;
    amountToPay: z.ZodNumber;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: number;
}, {
    accountNumber: string;
    concept: string;
    referenceNumber: string;
    identifier: string;
    transactionId: string;
    itemId: string;
    amountToPay: number;
}>;
type ProcessPaymentServiceCommandParsed = z.infer<typeof ProcessPaymentServiceCommandSchema>;

interface GetPaymentReversalsCommand {
    accountNumber: string;
}

interface PaymentReversalItemResult {
    sequential: number;
    name: string;
    category: string;
    reference: string;
    value: number;
    dateTime: string;
    concept: string;
}
interface PaymentReversalsResult {
    incompletePayments: PaymentReversalItemResult[];
}

interface PaymentReversalsProviderPort {
    getPaymentReversals(cmd: GetPaymentReversalsCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<PaymentReversalsResult>>;
}

declare class GetPaymentReversalsUseCase {
    private readonly provider;
    constructor(provider: PaymentReversalsProviderPort);
    execute(cmd: GetPaymentReversalsCommand, http: ProviderCallConfig): Promise<CanonicalResponse<PaymentReversalsResult>>;
}

declare const GetPaymentReversalsCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
}, {
    accountNumber: string;
}>;
type GetPaymentReversalsCommandParsed = z.infer<typeof GetPaymentReversalsCommandSchema>;

interface ProcessPaymentReversalCommand {
    accountNumber: string;
    referenceNumber: string;
    sequential: number;
    amount: number;
    concept: string;
}

interface ProcessPaymentReversalResult {
    date: string;
    transactionMessageNumber: string;
}

interface ProcessPaymentReversalProviderPort {
    processPaymentReversal(cmd: ProcessPaymentReversalCommand, http: ProviderCallConfig, options?: {
        tenant?: string;
        environment?: string;
    }): Promise<ProviderResult<ProcessPaymentReversalResult>>;
}

declare class ProcessPaymentReversalUseCase {
    private readonly provider;
    constructor(provider: ProcessPaymentReversalProviderPort);
    execute(cmd: ProcessPaymentReversalCommand, http: ProviderCallConfig): Promise<CanonicalResponse<ProcessPaymentReversalResult>>;
}

declare const ProcessPaymentReversalCommandSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    referenceNumber: z.ZodString;
    sequential: z.ZodNumber;
    amount: z.ZodNumber;
    concept: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accountNumber: string;
    amount: number;
    concept: string;
    referenceNumber: string;
    sequential: number;
}, {
    accountNumber: string;
    amount: number;
    concept: string;
    referenceNumber: string;
    sequential: number;
}>;
type ProcessPaymentReversalCommandParsed = z.infer<typeof ProcessPaymentReversalCommandSchema>;

export { type Account, type AccountMovement, type AccountMovementsProviderPort, type AccountSigner, type AccountSignersInfo, type AccountSignersProviderPort, type AuthLogin, type AuthLoginCommand, type AuthLoginCommandParsed, AuthLoginCommandSchema, type AuthLoginProviderPort, AuthLoginUseCase, type AuthPrecheckCommand, type AuthPrecheckCommandParsed, AuthPrecheckCommandSchema, type AuthPrecheckProviderPort, type AuthPrecheckStatus, AuthPrecheckUseCase, type CanonicalResponse, type CheckClientActiveCommand, CheckClientActiveCommandSchema, CheckClientActiveUseCase, type ClientAccountByNumberProviderPort, type ClientAccountsProviderPort, type ClientActiveStatus, type ClientLoan, type ClientLoansProviderPort, type ClientProfile, type ClientProfileByNumber, type ClientProfileByNumberProviderPort, type ClientProfileProviderPort, type ClientStatusProviderPort, type ConsolidatedAccountsProviderPort, ConsolidatedAccountsUseCase, type ConsolidatedBuckets, type ConsolidatedProduct, type ConsolidatedProductsProviderPort, type ConsolidatedTimeDepositsProviderPort, CreateExternalTransferUseCase, CreateInternalTransferUseCase, type DepositMovement, type DepositMovementsProviderPort, type EducationTypes, type EducationTypesProviderPort, EducationTypesUseCase, type ExternalTransferCommand, type ExternalTransferCommandParsed, ExternalTransferCommandSchema, type ExternalTransferProviderPort, type ExternalTransferResult, type GetAccountByNumberCommand, type GetAccountByNumberCommandParsed, GetAccountByNumberCommandSchema, GetAccountByNumberUseCase, type GetAccountMovementsCommand, type GetAccountMovementsCommandParsed, GetAccountMovementsCommandSchema, type GetAccountSignersCommand, GetAccountSignersCommandSchema, GetAccountSignersUseCase, type GetClientLoansCommand, GetClientLoansCommandSchema, GetClientLoansUseCase, type GetClientProfileByNumberCommand, type GetClientProfileByNumberCommandParsed, GetClientProfileByNumberCommandSchema, GetClientProfileByNumberUseCase, type GetClientProfileCommand, type GetClientProfileCommandParsed, GetClientProfileCommandSchema, GetClientProfileUseCase, type GetConsolidatedAccountsCommand, type GetConsolidatedAccountsCommandParsed, GetConsolidatedAccountsCommandSchema, type GetConsolidatedTimeDepositsCommand, GetConsolidatedTimeDepositsSchema, GetConsolidatedTimeDepositsUseCase, type GetDepositMovementsCommand, GetDepositMovementsSchema, GetDepositMovementsUseCase, type GetLoanAdditionalInfoCommand, GetLoanAdditionalInfoSchema, GetLoanAdditionalInfoUseCase, type GetLoanAmortizationTableCommand, GetLoanAmortizationTableSchema, GetLoanAmortizationTableUseCase, type GetPaymentReversalsCommand, type GetPaymentReversalsCommandParsed, GetPaymentReversalsCommandSchema, GetPaymentReversalsUseCase, type GetPaymentServiceQueryCommand, type GetPaymentServiceQueryCommandParsed, GetPaymentServiceQueryCommandSchema, GetPaymentServiceQueryUseCase, type HttpResponse, type InternalTransferCommand, type InternalTransferCommandParsed, InternalTransferCommandSchema, type InternalTransferProviderPort, type InternalTransferResult, type ItemTransferInitialCharge, ListAccountMovementsUseCase, type ListAccountsCommand, type ListAccountsCommandParsed, ListAccountsCommandSchema, ListAccountsUseCase, type ListCustomerProductsCommand, type ListCustomerProductsCommandParsed, ListCustomerProductsCommandSchema, ListCustomerProductsUseCase, ListTransferInitialChargeProductsUseCase, type LoanAdditionalInfo, type LoanAdditionalInfoProviderPort, type LoanAmortizationTable, type LoanAmortizationTableProviderPort, type LoanInstallment, MappingConfigError, type MaritalStatus, type MaritalStatusProviderPort, MaritalStatusUseCase, type PaymentReversalItemResult, type PaymentReversalsProviderPort, type PaymentReversalsResult, type PaymentServiceConcepts, type PaymentServiceConceptsProviderPort, PaymentServiceConceptsUseCase, type PaymentServiceQueryItemResult, type PaymentServiceQueryProviderPort, type PaymentServiceQueryResult, type ProcessPaymentReversalCommand, type ProcessPaymentReversalCommandParsed, ProcessPaymentReversalCommandSchema, type ProcessPaymentReversalProviderPort, type ProcessPaymentReversalResult, ProcessPaymentReversalUseCase, type ProcessPaymentServiceCommand, type ProcessPaymentServiceCommandParsed, ProcessPaymentServiceCommandSchema, type ProcessPaymentServiceProviderPort, type ProcessPaymentServiceResult, ProcessPaymentServiceUseCase, type ProductCategory, type ProfessionTypes, type ProfessionTypesProviderPort, ProfessionTypesUseCase, type ProviderCallConfig, ProviderHttpError, type ProviderResult, type SendSmsByIdentificationCommand, type SendSmsByIdentificationCommandParsed, SendSmsByIdentificationCommandSchema, type SendSmsByIdentificationProviderPort, type SendSmsByIdentificationResult, SendSmsByIdentificationUseCase, type SendSmsByPhoneCommand, type SendSmsByPhoneCommandParsed, SendSmsByPhoneCommandSchema, type SendSmsByPhoneProviderPort, SendSmsByPhoneUseCase, type TimeDeposit, type TransferInitialChargeBuckets, type TransferInitialChargeCategory, type TransferInitialChargeProviderPort, errorResponse, successResponse };

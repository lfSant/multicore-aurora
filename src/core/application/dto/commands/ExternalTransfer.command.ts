export interface ExternalTransferCommand {
  accountNumberOrigin: string;
  destinationAccountNumber: string;
  amount: string;
  destinationIdentification: string;
  originIdentification: string;
  destinationName: string;
  institutionSequential: string;
  accountTypeCode: string;
  concept: string;
  transferPlatform?: string;
  transferDate?: string;
  transferDevice?: string;
  transferCodeReference?: string;
  userCoreCode?: string
}

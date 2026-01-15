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
  platform?: string;
  date?: string;
  device?: string;
  codeReference?: string;
  clientNumber?: string
  subType?: string;
}

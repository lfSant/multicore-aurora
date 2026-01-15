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
  Platform?: string;
  Date?: string;
  Device?: string;
  CodeReference?: string;
  clientNumber?: string
  subType?: string;
}

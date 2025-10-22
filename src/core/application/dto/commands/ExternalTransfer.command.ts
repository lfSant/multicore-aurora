export interface ExternalTransferCommand {
  accountNumberOrigin: string;
  destinationAccountNumber: string;
  amount: string;
  destinationIdentification: string;
  destinationName: string;
  institutionSequential: string;
  accountTypeCode: string;
  concept: string;
}

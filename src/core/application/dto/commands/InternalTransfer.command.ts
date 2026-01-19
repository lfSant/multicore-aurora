export interface InternalTransferCommand {
  accountNumberOrigin: string;
  destinationAccountNumber: string;
  amount: string;
  concept: string;
  platform?: string;
  date?: string;
  device?: string;
  codeReference?: string;
  subType?: string;
}

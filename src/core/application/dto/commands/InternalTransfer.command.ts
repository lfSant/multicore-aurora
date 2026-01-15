export interface InternalTransferCommand {
  accountNumberOrigin: string;
  destinationAccountNumber: string;
  amount: string;
  concept: string;
  Platform?: string;
  Date?: string;
  Device?: string;
  CodeReference?: string;
  subType?: string;
}

export interface ExternalTransferResult {
  date?: string;
  transactionIdentifier: string | number;
  stateTransaction?: boolean;
  transferMessage?: string;
}

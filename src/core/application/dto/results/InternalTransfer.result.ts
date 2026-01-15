export interface InternalTransferResult {
    date?: string;
    transactionIdentifier: string | number;
    stateTransaction?: boolean;
    transferMessage?: string;
}
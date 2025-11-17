export interface ProcessPaymentReversalCommand {
  accountNumber: string;
  referenceNumber: string;
  sequential: number;
  amount: number;
  concept: string;
}

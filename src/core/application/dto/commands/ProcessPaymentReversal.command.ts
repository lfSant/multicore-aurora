export interface ProcessPaymentReversalCommand {
  accountNumber: string;
  referenceNumber: string;
  sequential: number;
  amount: string;
  concept: string;
}

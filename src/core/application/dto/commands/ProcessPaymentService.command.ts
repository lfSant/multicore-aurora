export interface ProcessPaymentServiceCommand {
  accountNumber: string;
  identifier: string;
  referenceNumber: string;
  transactionId: string;
  itemId: string;
  amountToPay: number;
  concept: string;
}

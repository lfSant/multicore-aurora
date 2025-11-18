export interface PaymentReversalItemResult {
  sequential: number;
  name: string;
  category: string;
  reference: string;
  value: string;
  dateTime: string;
  concept: string;
}

export interface PaymentReversalsResult {
  incompletePayments: PaymentReversalItemResult[];
}

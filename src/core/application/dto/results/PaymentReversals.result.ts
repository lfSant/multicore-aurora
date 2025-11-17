export interface PaymentReversalItemResult {
  sequential: number;
  name: string;
  category: string;
  reference: string;
  value: number;
  dateTime: string;
  concept: string;
}

export interface PaymentReversalsResult {
  incompletePayments: PaymentReversalItemResult[];
}

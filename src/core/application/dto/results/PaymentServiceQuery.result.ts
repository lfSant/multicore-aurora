export interface PaymentServiceQueryItemResult {
  commission: string;
  description: string;
  item: string;
  priority: number;
  value: string;
  valueWithCommission: string;
}

export interface PaymentServiceQueryResult {
  items: PaymentServiceQueryItemResult[];
  transactionId: string;
  identification: string;
  name: string;
}

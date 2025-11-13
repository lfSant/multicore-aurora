export interface PaymentServiceQueryItemResult {
  commission: string;
  description: string;
  item: string;
  priority: number;
  value: number;
  valueWithCommission: number;
}

export interface PaymentServiceQueryResult {
  items: PaymentServiceQueryItemResult[];
  transactionId: string;
  identification: string;
  name: string;
}

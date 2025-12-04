export interface ProcessPaymentServiceResult {
  transactionDateTime: string;
  paymentCode: string;
  transactionCode: string;
  authorizationCode: string;
  product: string;
  traceCode: string;
  invoice: string;
  terminal: string;
  switchSequence: string;
  identification: string;
  invoiceUrl: string;
  acquirerSequence: string;
  compensationDate: string;
  xmlReceipt: string;
  receiptLines?: string[];
  receiptObject?: Record<string, string>;
}

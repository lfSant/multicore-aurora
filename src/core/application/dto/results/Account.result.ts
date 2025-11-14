export interface Account {
  accountNumber: string;
  accountType: string;
  status: string;
  currency: string;
  officeName?: string;
  openDate?: string;
  signatureType?: string;
  balance: string;
  availableBalance: string;
  holdBalance?: string;
  blockedBalance?: string;
  otherBalance?: string;
  pledgedBalance?: string;
  operationalTransactionsAllowed?: boolean | null;
  productCategory: 'ACCOUNT';
  extras?: Record<string, any>;
  errorCodigo?: number;
  errorTipo?: string;
  errorDescripcion?: string;
}


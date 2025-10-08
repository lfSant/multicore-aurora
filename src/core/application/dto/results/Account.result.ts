export interface Account {
  accountNumber: string;
  accountType: string;
  status: string;
  currency: string;
  officeName?: string;
  openDate?: string;
  signatureType?: string;
  balance: number;
  availableBalance: number;
  holdBalance?: number;
  blockedBalance?: number;
  otherBalance?: number;
  pledgedBalance?: number;
  operationalTransactionsAllowed?: boolean | null;
  productCategory: 'ACCOUNT';
  extras?: Record<string, any>;
}


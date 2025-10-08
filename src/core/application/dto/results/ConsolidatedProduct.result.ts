export type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN';

export interface ConsolidatedProduct {
  productCategory: ProductCategory;

  // ACCOUNT
  accountNumber?: string;
  accountType?: string;
  currency?: string;
  holdBalance?: number;
  blockedBalance?: number;
  otherBalance?: number;
  pledgedBalance?: number;
  balance?: number;
  availableBalance?: number;
  operationalTransactionsAllowed?: boolean;
  status?: string;
  signatureType?: string;

  // TIME_DEPOSIT
  id?: string | number;
  code?: string;
  depositType?: string;
  maturityDate?: string;
  amount?: number;
  interestCollected?: number;
  frequency?: string | null;
  financialYield?: string;
  rate?: string;
  termDays?: number;
  openDate?: string;
  installments?: number;

  // LOAN
  loanCode?: string;
  loanType?: string;
  currentBalance?: number;
  payoffAmount?: number;
  nextDueDate?: string;
  relationshipType?: string;
}

export interface ConsolidatedBuckets {
  accounts: ConsolidatedProduct[];
  timeDeposits: ConsolidatedProduct[];
  loans: ConsolidatedProduct[];
}

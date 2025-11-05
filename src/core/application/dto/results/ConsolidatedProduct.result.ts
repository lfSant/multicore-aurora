export type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN';

export interface ConsolidatedProduct {
  productCategory: ProductCategory;

  // ACCOUNT
  accountNumber?: string;
  accountType?: string;
  currency?: string;
  holdBalance?: string;
  blockedBalance?: string;
  otherBalance?: string;
  pledgedBalance?: string;
  balance?: string;
  availableBalance?: string;
  operationalTransactionsAllowed?: boolean;
  status?: string;
  signatureType?: string;

  // TIME_DEPOSIT
  id?: string | number;
  code?: string;
  depositType?: string;
  maturityDate?: string;
  amount?: string;
  interestCollected?: string;
  frequency?: string | null;
  financialYield?: string;
  rate?: string;
  termDays?: number;
  openDate?: string;
  installments?: number;

  // LOAN
  loanCode?: string;
  loanType?: string;
  currentBalance?: string;
  payoffAmount?: string;
  nextDueDate?: string;
  relationshipType?: string;
}

export interface ConsolidatedBuckets {
  accounts: ConsolidatedProduct[];
  timeDeposits: ConsolidatedProduct[];
  loans: ConsolidatedProduct[];
}

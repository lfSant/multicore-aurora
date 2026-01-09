export type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN' | 'GUARANTEE' | 'CREDIT_CARD';

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

  // GUARANTEE FIELDS
  guaranteeDescription?: string;
  guaranteeNumber?: string;
  guaranteeValue?: string;
  guaranteeStatus?: string;
  guaranteeExpirationDate?: string;
  guaranteeIssueDate?: string;

  // CREDIT CARD FIELDS
  creditCardDescription?: string;
  creditCardNumber?: string;
  creditCardLimit?: string;
  creditCardBalance?: string;
  creditCardAvailable?: string;
  creditCardMinimumPayment?: string;
  creditCardCutOffDate?: string;
  creditCardPaymentDate?: string;
  creditCardStatus?: string;
}

export interface ConsolidatedBuckets {
  accounts: ConsolidatedProduct[];
  timeDeposits: ConsolidatedProduct[];
  loans: ConsolidatedProduct[];
  guarantees: ConsolidatedProduct[];
  creditCards: ConsolidatedProduct[];
}
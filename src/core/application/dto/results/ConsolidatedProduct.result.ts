export type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN' | 'CREDIT_CARD';

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
  currencyCode?: string;

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
  retentionTax?: string;
  totalToReceive?: string;
  branchTDCode?: string;
  branchTDName?: string; 

  // LOAN
  loanCode?: string;
  loanType?: string;
  currentBalance?: string;
  payoffAmount?: string;
  nextDueDate?: string;
  relationshipType?: string;
  originalAmount?: string;
  creationDate?: string;
  daysPastDue?: number;
  loanStatus?: string;
  loanStatusDescription?: string;
  numberOfInstallments?: number;
  interestRate?: string;
  branchCode?: string;
  branchName?: string;

  // CREDIT CARD
  creditCardDescription?: string;
  creditCardNumber?: string;
  creditCardLimit?: string;
  creditCardBalance?: string;
  creditCardAvailable?: string;
  creditCardMinimumPayment?: string;
  creditCardCutOffDate?: string;
  creditCardPaymentDate?: string;
  creditCardStatus?: string;
  creditCardCoreCode?: string;
  creditCardProductCode?: string;
  creditCardCurrencyCode?: string;
}

export interface ConsolidatedBuckets {
  accounts: ConsolidatedProduct[];
  timeDeposits: ConsolidatedProduct[];
  loans: ConsolidatedProduct[];
  creditCards: ConsolidatedProduct[];
}
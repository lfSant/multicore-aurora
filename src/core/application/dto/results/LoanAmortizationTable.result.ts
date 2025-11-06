export interface LoanInstallment {
  status: string;
  installmentNumber: number;
  dueDate: string;
  termDays: number;
  principal: string;
  interest: string;
  lifeInsurance: string;
  other: string;
  loanBalance: string;
  totalInstallment: string;
}

export interface LoanAmortizationTable {
  clientName: string;
  initialDebt: string;
  loanBalance: string;
  office: string;
  disbursementDate: string;
  creditType: string;
  dueDate: string;
  accountingRating: string;
  numberOfInstallments: number;
  applicationNumber: number;
  paymentFrequency: string;
  creditNumber: string;
  rate: string;
  tea: string;
  installments: LoanInstallment[];
}

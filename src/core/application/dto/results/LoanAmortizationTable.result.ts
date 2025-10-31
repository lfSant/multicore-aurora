export interface LoanInstallment {
  status: string;
  installmentNumber: number;
  dueDate: string;
  termDays: number;
  principal: number;
  interest: number;
  lifeInsurance: number;
  other: number;
  loanBalance: number;
  totalInstallment: number;
}

export interface LoanAmortizationTable {
  clientName: string;
  initialDebt: number;
  loanBalance: number;
  office: string;
  disbursementDate: string;
  creditType: string;
  dueDate: string;
  accountingRating: string;
  numberOfInstallments: number;
  applicationNumber: number;
  paymentFrequency: string;
  creditNumber: string;
  rate: number;
  tea: number;
  installments: LoanInstallment[];
}

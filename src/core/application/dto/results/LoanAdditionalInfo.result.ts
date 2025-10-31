export interface LoanAdditionalInfo {
  office: string;
  officer: string;
  currentBalance: number;
  lastPaymentDate: string;
  nextDueDate: string;
  amountToCancel: number;
  overdueInstallments: number;
  overdueDays: number;
  totalInstallmentAmount: number;
  amountUpToCurrentInstallment: number;
}

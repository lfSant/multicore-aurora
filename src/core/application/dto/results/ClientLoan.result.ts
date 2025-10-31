export interface ClientLoan {
  sequential: number;
  code: string;
  type: string;
  initialDebt: number;
  balance: number;
  disbursementDate: string;
  dueDate: string;
  status: string;
  installments: number;
  frequency: string;
  rate: number;
  advisor: string;
  lifeInsurance: number;
  clientName: string;
}

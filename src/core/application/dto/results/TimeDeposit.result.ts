export interface TimeDeposit {
  sequential: number;
  code: string;
  depositType: string;
  currency: string;
  status: string;
  dueDate: string;
  amount: number;
  collectionInterestBalance: number;
  calculationInterestBalance: number;
}

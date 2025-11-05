export interface GetDepositMovementsCommand {
  depositSequential: number;
  startDate: string;
  endDate: string;
  companySequential?: number;
}

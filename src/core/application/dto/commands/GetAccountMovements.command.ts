export interface GetAccountMovementsCommand {
  accountNumber?: string;
  productCode?: string;
  startDate: string;
  endDate: string;
}
export interface GetAccountMovementsCommand {
  accountNumber?: string;
  accountIntNumber?: number;
  prodCod?: string;
  startDate: string;
  endDate: string;
}
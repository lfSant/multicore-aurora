export interface ValidateCreditNoteCommand {
  identification: string;
  accountNumber: string;
  amount: string;
  causal: string;
  observation: string;
  flowSsn: string;
}

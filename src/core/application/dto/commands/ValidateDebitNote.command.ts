export interface ValidateDebitNoteCommand {
  identification: string;
  accountNumber: string;
  amount: string;
  causal: string;
  observation: string;
  flowSsn: string;
}

import { TransferInitialChargeBuckets, ItemTransferInitialCharge } from "../dto/results/TransferInitialCharge.result";

export function groupTransferInitialCharge(items: ItemTransferInitialCharge[]): TransferInitialChargeBuckets {
  const out: TransferInitialChargeBuckets = { conceptTransactions: [], accountTypes: [], institutionInformations: [] };
  for (const it of items || []) {
    switch (it.productCategory) {
      case 'CONCEPT_TRANSACTION': out.conceptTransactions.push(it); break;
      case 'ACCOUNT_TYPE':       out.accountTypes.push(it);       break;
      case 'INSTITUTION_INFO':   out.institutionInformations.push(it); break;
    }
  }
  return out;
}

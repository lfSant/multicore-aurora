import { ConsolidatedBuckets, ConsolidatedProduct } from "../dto/results/ConsolidatedProduct.result";

export function groupConsolidated(items: ConsolidatedProduct[]): ConsolidatedBuckets {
  const out: ConsolidatedBuckets = { 
    accounts: [], 
    timeDeposits: [], 
    loans: [], 
    creditCards: [] 
  };
  
  for (const it of items || []) {
    switch (it.productCategory) {
      case 'ACCOUNT':       out.accounts.push(it);       break;
      case 'TIME_DEPOSIT':  out.timeDeposits.push(it);   break;
      case 'LOAN':          out.loans.push(it);          break;    break;
      case 'CREDIT_CARD':   out.creditCards.push(it); break;
    }
  }
  return out;
}
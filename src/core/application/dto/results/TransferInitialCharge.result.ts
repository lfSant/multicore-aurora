export type TransferInitialChargeCategory = 'CONCEPT_TRANSACTION' | 'ACCOUNT_TYPE' | 'INSTITUTION_INFO';

export interface ItemTransferInitialCharge {
  productCategory: TransferInitialChargeCategory;

  //* CONCEPT_TRANSACTION
  codeConceptTransaction?: string;
  paymentOrderCode?: string;
  nameConceptTransaction?: string;

  //* ACCOUNT_TYPE
  codeAccountType?: string;
  nameAccountType?: string;

  //* INSTITUTION_INFO
  sequentialInstitution?: number;
  nameInstitution?: string;
}

export interface TransferInitialChargeBuckets {
  conceptTransactions: ItemTransferInitialCharge[];
  accountTypes: ItemTransferInitialCharge[];
  institutionInformations: ItemTransferInitialCharge[];
}


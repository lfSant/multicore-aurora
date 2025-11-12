export interface PaymentServiceConcepts {
  // Campos base estándar (en inglés)
  code: string;
  name: string;
  
  // Campos específicos del dominio de pago de servicios
  identifier: string;
  product: string;
  category: string;
  
  // Campos opcionales (pueden venir de dy-23 o legacy)
  subCategory?: string;
  codeCop?: string;
  commission?: string;
  status?: string;
  referenceLengthMax?: string;
  referenceLengthMin?: string;
  referenceDataType?: string;
  onlineReversal?: string;
  hasOtp?: string;
  controlType?: string;
  paymentType?: string;
  productType?: string;
  transactionType?: string;
  queryTrxType?: string;
  paymentTrxType?: string;
  reversalTrxType?: string;
  referenceTitle?: string;
  
  extras?: Record<string, any>;
}

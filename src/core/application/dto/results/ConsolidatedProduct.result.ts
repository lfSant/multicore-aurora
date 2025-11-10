export type ProductCategory = 'ACCOUNT' | 'TIME_DEPOSIT' | 'LOAN' | 'GUARANTEE' | 'CREDIT_CARD';

export interface ConsolidatedProduct {
  productCategory: ProductCategory;

  errorCodigo?: number;
  errorTipo?: string;
  errorDescripcion?: string;

  // ACCOUNT
  accountNumber?: string;
  accountType?: string;
  currency?: string;
  holdBalance?: string;
  blockedBalance?: string;
  otherBalance?: string;
  pledgedBalance?: string;
  balance?: string;
  availableBalance?: string;
  operationalTransactionsAllowed?: boolean;
  status?: string;
  signatureType?: string;

  // TIME_DEPOSIT
  id?: string | number;
  code?: string;
  depositType?: string;
  maturityDate?: string;
  amount?: string;
  interestCollected?: string;
  frequency?: string | null;
  financialYield?: string;
  rate?: string;
  termDays?: number;
  openDate?: string;
  installments?: number;

  // LOAN - AGREGAR CAMPOS  
  loanCode?: string;
  loanType?: string;
  currentBalance?: string;
  payoffAmount?: string;
  nextDueDate?: string;
  relationshipType?: string;

  // CAMPOS PARA GARANTÍAS
  garantiaDescripcion?: string;
  garantiaNumero?: string;
  garantiaValor?: string;
  garantiaEstado?: string;
  garantiaFechaVencimiento?: string;
  garantiaFechaEmision?: string;

  // CAMPOS PARA TARJETAS CRÉDITO
  tarjetaDescripcion?: string;
  tarjetaNumero?: string;
  tarjetaLimite?: string;
  tarjetaSaldo?: string;
  tarjetaDisponible?: string;
  tarjetaMontoMinimo?: string;
  tarjetaFechaCorte?: string;
  tarjetaFechaPago?: string;
  tarjetaEstado?: string;
}

export interface ConsolidatedBuckets {
  accounts: ConsolidatedProduct[];
  timeDeposits: ConsolidatedProduct[];
  loans: ConsolidatedProduct[];
  garantias: ConsolidatedProduct[];
  tarjetasCredito: ConsolidatedProduct[];
}
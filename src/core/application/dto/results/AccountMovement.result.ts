export interface AccountMovement{
  date: string;
  reference: string;
  amount: string;
  balance: string;
  machineDate?: string;
  concept: string;
  cause?: string;
  office?: string;
  user?: string;
  movementType: 'DEBIT' | 'CREDIT';
  extras?: Record<string, any>;
}


export interface AccountMovement{
  date: string;
  reference: string;
  amount: number;
  balance: number;
  machineDate?: string;
  concept: string;
  cause?: string;
  office?: string;
  user?: string;
  movementType: 'DEBIT' | 'CREDIT';
  extras?: Record<string, any>;
}


export interface InternalTransferCommand {
  accountNumberOrigin: string;
  destinationAccountNumber: string;
  amount: string;
  concept: string;
  transferPlatform?: string;
  transferDate?: string;
  transferDevice?: string;
  transferCodeReference?: string;
}

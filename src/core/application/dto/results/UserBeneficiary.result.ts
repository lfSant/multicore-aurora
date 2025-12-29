export interface UserBeneficiaryResult {
  clientNumber: number;
  accountType: string;
  accountNumber: string;
  registrationDate: string;
  bankCode: number;
  beneficiaryIdentification: string;
  beneficiaryFirstName: string;
  beneficiaryLastName: string;
  beneficiarySecondLastName: string;
  beneficiaryEmail: string;
  beneficiaryType: string;
  beneficiaryPhone: string;
  bank: string | null;
}

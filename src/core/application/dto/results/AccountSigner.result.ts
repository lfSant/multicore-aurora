export interface AccountSigner {
  clientNumber: string;
  identificationDocument: string;
  firstName: string;
  lastName: string;
  signatureType: string;
  email: string;
  phoneNumber: string;
}

export interface AccountSignersInfo {
  accountCode: string;
  accountType: string;
  signatureType: string;
  signers: AccountSigner[];
}

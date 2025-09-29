export interface ClientProfile {
  clientNumber: number;
  currencyCode: string;
  officeId: string;
  officeName: string;
  firstNames: string;
  lastNames: string;
  identification: string;
  identificationType: string;
  address: string;
  birthDateMs: number;
  countryCode: number;
  countryName: string;
  email: string;
  phone: string;
  tradeName: string;
  businessName: string;
  naturalPerson: boolean;
  gender: string;
  maritalStatusCode: string;
  educationTypeCode: string;
  professionCode: string;
  extras?: Record<string, unknown>;
}

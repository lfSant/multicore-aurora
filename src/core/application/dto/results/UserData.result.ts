export interface SecurityQuestion {
  questionId: number;
  answerId: number | null;
  personalAnswer: string | null;
}

export interface UserDataResult {
  username: string;
  identification: string;
  phoneNumber: string;
  email: string;
  creationDate: string;
  lastPasswordChange: string;
  securityImage: string;
  securityImageAlias: string;
  securityQuestions: SecurityQuestion[];
  limitDay: string;
  limitWeek: string;
  limitMonth: string;
  names: string | null;
  firstName: string | null;
  secondName: string | null;
  firstLastName: string | null;
  secondLastName: string | null;
  birthDate: string;
  maritalStatus: string;
  address: string;
  officeCode: string;
  clientCode: string;
  dataUsageAcceptance: boolean;
  lastLogin: string;
}

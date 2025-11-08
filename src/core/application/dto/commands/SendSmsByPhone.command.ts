/**
 * Command para enviar SMS a un número de teléfono
 */
export interface SendSmsByPhoneCommand {
  phoneNumber: string;
  message: string;
}

/**
 * Command para enviar SMS a un cliente por su identificación
 */
export interface SendSmsByIdentificationCommand {
  clientIdentification: string;
  message: string;
}

import { NotificationProvider } from "../types";

export class EmailProvider implements NotificationProvider {
  async send(userId: string, message: string): Promise<void> {
    // Lógica para enviar un correo electrónico
    console.log(`Enviando correo a ${userId}: ${message}`);
  }
}

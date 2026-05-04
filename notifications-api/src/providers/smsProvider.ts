import { NotificationProvider } from "../types";

export class SmsProvider implements NotificationProvider {
  async send(userId: string, message: string): Promise<void> {
    // Lógica para enviar un mensaje de texto
    console.log(`Enviando SMS a ${userId}: ${message}`);
  }
}

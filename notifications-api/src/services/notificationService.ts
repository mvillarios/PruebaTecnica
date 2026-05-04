import { EmailProvider } from "../providers/emailProvider";
import { SmsProvider } from "../providers/smsProvider";
import { addNotification, getNotifications } from "../store";
import { Channel, Notification, NotificationProvider } from "../types";

// Strategy pattern para manejar diferentes proveedores de notificaciones
const providers: Record<Channel, NotificationProvider> = {
  email: new EmailProvider(),
  sms: new SmsProvider(),
};

export const sendNotification = async (
  userId: string,
  message: string,
  channel: Channel,
): Promise<Notification> => {
  const provider = providers[channel];

  await provider.send(userId, message);

  const notification: Notification = { userId, message, channel };

  addNotification(notification);

  return notification;
};

export const getAllNotifications = (): Notification[] => {
  return getNotifications();
};

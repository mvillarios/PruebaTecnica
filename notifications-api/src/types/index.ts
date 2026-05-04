export type Channel = "email" | "sms";

export interface Notification {
  userId: string;
  message: string;
  channel: Channel;
}

export interface NotificationProvider {
  send(userId: string, message: string): Promise<void>;
}

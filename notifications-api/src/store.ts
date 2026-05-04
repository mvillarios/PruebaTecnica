import { Notification } from "./types";

const notifications: Notification[] = [];

export const addNotification = (notification: Notification) => {
  notifications.push(notification);
};

export const getNotifications = (): Notification[] => {
  return notifications;
};

export const clearNotifications = () => {
  notifications.length = 0;
};

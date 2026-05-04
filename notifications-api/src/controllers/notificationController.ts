import { Request, Response } from "express";
import { Channel } from "../types";
import {
  sendNotification,
  getAllNotifications,
} from "../services/notificationService";

const validChannels: Channel[] = ["email", "sms"];

export class NotificationController {
  static createNotification = async (req: Request, res: Response) => {
    const { userId, message, channel } = req.body;

    if (!userId || !message || !channel) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    if (!validChannels.includes(channel)) {
      return res.status(400).json({ error: "Canal no válido" });
    }

    const notification = await sendNotification(userId, message, channel);

    res.status(201).json(notification);
  };

  static getNotifications = async (req: Request, res: Response) => {
    const notifications = getAllNotifications();
    res.status(200).json({ data: notifications });
  };
}

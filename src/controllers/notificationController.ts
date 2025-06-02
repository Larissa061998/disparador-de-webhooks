/**
 * Controller de Notificações
 */
import { Request, Response } from 'express';
import NotificationService from '../services/notificationService';

export default class NotificationController {
  static async list(req: Request, res: Response) {
    const { start, end } = req.query;
    const notifications = await NotificationService.list(start as string, end as string);
    res.status(200).json(notifications);
  }
}

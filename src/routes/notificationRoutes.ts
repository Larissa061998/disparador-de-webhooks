import { Router } from 'express';
import NotificationController from '../controllers/notificationController';

const router = Router();

router.get('/', NotificationController.list);

export default router;
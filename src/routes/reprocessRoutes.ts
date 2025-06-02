import { Router } from 'express';
import ReprocessController from '../controllers/reprocessController';

const router = Router();

router.post('/webhook', ReprocessController.webhook);
router.post('/email-agendado', ReprocessController.emailAgendado);
router.post('/evento', ReprocessController.evento);

export default router;
import { Router } from 'express';
import authRoutes from './authRoutes';
import notificationRoutes from './notificationRoutes';
import protocolRoutes from './protocolRoutes';
import reprocessRoutes from './reprocessRoutes';
import healthRoutes from './healthRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/notifications', notificationRoutes);
router.use('/protocols', protocolRoutes);
router.use('/reprocess', reprocessRoutes);
router.use('/health', healthRoutes);

export default router;
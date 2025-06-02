import { Router } from 'express';
import ProtocolController from '../controllers/protocolController';

const router = Router();

router.get('/', ProtocolController.list);

export default router;

/**
 * Controller de Reprocessamento
 */
import { Request, Response } from 'express';
import ReprocessService from '../services/reprocessService';

export default class ReprocessController {
  static async webhook(req: Request, res: Response) {
    const { ids } = req.body;
    const protocol = await ReprocessService.webhook(ids);
    res.status(202).json({ protocol });
  }

  static async emailAgendado(req: Request, res: Response) {
    const { clienteId, dataAgendamento } = req.body;
    const result = await ReprocessService.emailAgendado(clienteId, dataAgendamento);
    res.status(200).json(result);
  }

  static async evento(req: Request, res: Response) {
    const { clienteId, evento } = req.body;
    const result = await ReprocessService.evento(clienteId, evento);
    res.status(200).json(result);
  }
}

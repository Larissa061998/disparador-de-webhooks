/**
 * Controller de Protocolos
 */
import { Request, Response } from 'express';
import ProtocolService from '../services/protocolService';

export default class ProtocolController {
  static async list(_: Request, res: Response) {
    const protocols = await ProtocolService.list();
    res.status(200).json(protocols);
  }
}
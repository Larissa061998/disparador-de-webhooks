/**
 * Health Check Controller
 * Verifica se a API está funcionando corretamente.
 */
import { Request, Response } from 'express';

export const healthCheck = async (_req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    status: 'Success'
  });
};
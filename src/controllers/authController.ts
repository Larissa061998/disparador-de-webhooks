/**
 * Controller de Autenticação
 */
import { Request, Response } from 'express';
import AuthService from '../services/authService';

export default class AuthController {
  static async login(req: Request, res: Response) {
    const { cnpj, senha } = req.body;
    const token = await AuthService.login(cnpj, senha);
    res.status(200).json({ token });
  }
}

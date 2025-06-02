export default class AuthService {
  static async login(cnpj: string, senha: string): Promise<string> {
    // TODO: Implementar autenticação com JWT e validação no banco
    return 'jwt_token_aqui';
  }
}
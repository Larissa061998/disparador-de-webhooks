export default class ReprocessService {
  static async webhook(ids: string[]): Promise<string> {
    // TODO: Criar protocolo, enviar para fila, validar regras de limite
    return 'protocolo_webhook';
  }

  static async emailAgendado(clienteId: string, dataAgendamento: string): Promise<any> {
    // TODO: Criar protocolo, validar regras, enviar agendamento para fila
    return { success: true };
  }

  static async evento(clienteId: string, evento: string): Promise<any> {
    // TODO: Criar protocolo, validar regras, enviar evento para fila
    return { success: true };
  }
}

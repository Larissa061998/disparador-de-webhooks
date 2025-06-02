"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReprocessService {
    static async webhook(ids) {
        // TODO: Criar protocolo, enviar para fila, validar regras de limite
        return 'protocolo_webhook';
    }
    static async emailAgendado(clienteId, dataAgendamento) {
        // TODO: Criar protocolo, validar regras, enviar agendamento para fila
        return { success: true };
    }
    static async evento(clienteId, evento) {
        // TODO: Criar protocolo, validar regras, enviar evento para fila
        return { success: true };
    }
}
exports.default = ReprocessService;

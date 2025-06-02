"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reprocessService_1 = __importDefault(require("../services/reprocessService"));
class ReprocessController {
    static async webhook(req, res) {
        const { ids } = req.body;
        const protocol = await reprocessService_1.default.webhook(ids);
        res.status(202).json({ protocol });
    }
    static async emailAgendado(req, res) {
        const { clienteId, dataAgendamento } = req.body;
        const result = await reprocessService_1.default.emailAgendado(clienteId, dataAgendamento);
        res.status(200).json(result);
    }
    static async evento(req, res) {
        const { clienteId, evento } = req.body;
        const result = await reprocessService_1.default.evento(clienteId, evento);
        res.status(200).json(result);
    }
}
exports.default = ReprocessController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protocolService_1 = __importDefault(require("../services/protocolService"));
class ProtocolController {
    static async list(_, res) {
        const protocols = await protocolService_1.default.list();
        res.status(200).json(protocols);
    }
}
exports.default = ProtocolController;

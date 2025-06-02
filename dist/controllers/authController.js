"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authService_1 = __importDefault(require("../services/authService"));
class AuthController {
    static async login(req, res) {
        const { cnpj, senha } = req.body;
        const token = await authService_1.default.login(cnpj, senha);
        res.status(200).json({ token });
    }
}
exports.default = AuthController;

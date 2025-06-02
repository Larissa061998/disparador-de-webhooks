"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notificationService_1 = __importDefault(require("../services/notificationService"));
class NotificationController {
    static async list(req, res) {
        const { start, end } = req.query;
        const notifications = await notificationService_1.default.list(start, end);
        res.status(200).json(notifications);
    }
}
exports.default = NotificationController;

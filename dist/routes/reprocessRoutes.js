"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reprocessController_1 = __importDefault(require("../controllers/reprocessController"));
const router = (0, express_1.Router)();
router.post('/webhook', reprocessController_1.default.webhook);
router.post('/email-agendado', reprocessController_1.default.emailAgendado);
router.post('/evento', reprocessController_1.default.evento);
exports.default = router;

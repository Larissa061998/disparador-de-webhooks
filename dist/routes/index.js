"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const notificationRoutes_1 = __importDefault(require("./notificationRoutes"));
const protocolRoutes_1 = __importDefault(require("./protocolRoutes"));
const reprocessRoutes_1 = __importDefault(require("./reprocessRoutes"));
const healthRoutes_1 = __importDefault(require("./healthRoutes"));
const router = (0, express_1.Router)();
router.use('/auth', authRoutes_1.default);
router.use('/notifications', notificationRoutes_1.default);
router.use('/protocols', protocolRoutes_1.default);
router.use('/reprocess', reprocessRoutes_1.default);
router.use('/health', healthRoutes_1.default);
exports.default = router;

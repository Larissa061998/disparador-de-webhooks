"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = void 0;
const healthCheck = async (_req, res) => {
    res.status(200).json({
        status: 'Success'
    });
};
exports.healthCheck = healthCheck;

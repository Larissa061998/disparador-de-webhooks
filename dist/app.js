"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
const apiRoutes = require('./routes/apiRoutes');
app.use(express_1.default.json());
(0, swagger_1.setupSwagger)(app);
app.use('/api', apiRoutes);
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
    console.log("Swagger em: http://localhost:3000/docs");
});

import express from "express";
import { setupSwagger } from "./swagger";

const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
setupSwagger(app);

app.use('/api', apiRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Swagger em: http://localhost:3000/docs");
});
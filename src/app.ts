import express from "express";
import { setupSwagger } from "./swagger";
import routes from './routes';  
const app = express();

app.use(express.json());
setupSwagger(app);

app.use('/api', routes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Swagger em: http://localhost:3000/docs");
});
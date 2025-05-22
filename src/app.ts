import express from "express";
import { setupSwagger } from "./swagger";

const app = express();

app.use(express.json());
setupSwagger(app);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Swagger em: http://localhost:3000/docs");
});
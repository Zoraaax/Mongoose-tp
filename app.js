import express from "express";
import { Routes } from "./src/Routes/index.js";

const app = express();
const PORT = 8080;

app.use(express.json());

Routes(app);

app.listen(PORT, () => console.log(`Serveur ouvert sur le ${PORT}`));

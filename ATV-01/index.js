import express from "express";
const app = express();

app.use(express.static("public"));


app.get("/", function (req, res) {
  res.render("index", {
    activeLink: 'dashboard'
  });
});

app.set("view engine", "ejs");

import atoresController from "./controllers/atoresController.js";
import filmesConstroller from "./controllers/filmesConstroller.js";
import generosController from "./controllers/generosController.js";

app.use("/", atoresController);
app.use("/", filmesConstroller);
app.use("/", generosController);





const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});
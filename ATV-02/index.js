import express from "express";
const app = express();

import connection from "./config/sequelize-config.js" 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
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



// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
});

connection.query("CREATE DATABASE IF NOT EXISTS cinedash;").then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
});



const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});
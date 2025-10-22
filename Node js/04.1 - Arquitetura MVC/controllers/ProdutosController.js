//const express = require("express"); -- CommonJS Modules
import express from "express" // ES6 modules

//Carregando na variavel router o express.router que é responsavel
//por gerenciar as rotas da aplicacao
const router = express.Router()

router.get("/produtos", (req, res) => {
    //lista de produtos
    // const produtos = ["Computador", "celular", "Tablet", "Notebook"];

    //Array de objetos com os produtos
    const produtos = [
        {nome: "celular", preco: 3000},
        {nome: "Computador", preco: 4000},
        {nome: "Tablet", preco: 2000},
        {nome: "Notebook", preco: 3800},

    ];

    res.render("produtos", {
        produtos : produtos
    });
});


//exportando o objeto router
export default router;


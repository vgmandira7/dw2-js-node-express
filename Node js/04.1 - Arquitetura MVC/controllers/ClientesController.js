//const express = require("express"); -- CommonJS Modules
import express from "express" // ES6 modules

//Carregando na variavel router o express.router que é responsavel
//por gerenciar as rotas da aplicacao
const router = express.Router()


router.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "Ricardo", cpf: "533.562.135.90", endereco: "Rua das laranjas, 34"},
        {nome: "Isaac", cpf: "512.345.121.90", endereco: "Rua das Maçâs, 66"},
        {nome: "Ana Flávia", cpf: "523.315.123.45", endereco: "Rua das Maçâs, 66"},
        {nome: "Renan", cpf: "123.234.456.23", endereco: "Rua das peras, 123"},
        
    ];

    res.render("clientes", {
        clientes : clientes
    });
});

//exportando o objeto router
export default router;
import express from "express" // ES6 modules

//Carregando na variavel router o express.router que é responsavel
//por gerenciar as rotas da aplicacao
const router = express.Router()

router.get("/pedidos", (req, res) => {
    const pedidos = [
        {numero: 12, produto: "Escova", valorPedido: 35},
        {numero: 13, produto: "Cadeira", valorPedido: 400},
        {numero: 14, produto: "Mesa", valorPedido: 600},
        {numero: 15, produto: "Cama", valorPedido: 1200},

    ];
    res.render("pedidos", {
        pedidos : pedidos
    });
});
//exportando o objeto router
export default router;

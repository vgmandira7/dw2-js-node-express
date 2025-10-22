import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Pedido from "../models/Pedido.js";

// ROTA CLIENTES
router.get("/pedidos", function (req, res) {
  // SELECT * FROM CLIENTES
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

//Rota de cadastro de clientes
router.post("/pedidos/new", (req, res) => {
  //Coletando os dados do formulario
  //o nome é o name da input
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.create ({
    //Coluna : Dado do form
    numero : numero,
    valor : valor,
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error);
  });
});

//Rota de exclusão de cliente
//id é um parametro obrigatorio
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id
  //destroy exclui um registro do basnco
  Pedido.destroy({
    where: {
      id : id,
    },
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error);
  });
});

//Rota de edição de clientes

router.get("/pedidos/edit/:id" , (req, res) => {
  const id = req.params.id
  //Buscando cliente pela iD
  //Busca o registrpo pela chave primaria
  Pedido.findByPk(id).then(pedido => {
    res.render("pedidoEdit", {
      pedido : pedido
    });
  });
});

//Rota de alteração de cliente

router.post("/pedidos/update", (req, res) => {
  const id = req.body.id
  const numero = req.body.numero
  const valor = req.body.valor

  Pedido.update({
    numero : numero,
    valor : valor,
  },
  {where : {id : id}}
).then(() => {
  res.redirect("/pedidos");
}).catch(error => {
  console.log(error)
})
})

export default router;

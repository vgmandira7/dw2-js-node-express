import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // SELECT * FROM CLIENTES
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

//Rota de cadastro de clientes
router.post("/clientes/new", (req, res) => {
  //Coletando os dados do formulario
  //o nome é o name da input
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.create ({
    //Coluna : Dado do form
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

//Rota de exclusão de cliente
//id é um parametro obrigatorio
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id
  //destroy exclui um registro do basnco
  Cliente.destroy({
    where: {
      id : id,
    },
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

//Rota de edição de clientes

router.get("/clientes/edit/:id" , (req, res) => {
  const id = req.params.id
  //Buscando cliente pela iD
  //Busca o registrpo pela chave primaria
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente : cliente
    });
  });
});

//Rota de alteração de cliente

router.post("/clientes/update", (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco

  Cliente.update({
    nome : nome,
    cpf : cpf,
    enderco : endereco
  },
  {where : {id : id}}
).then(() => {
  res.redirect("/clientes");
}).catch(error => {
  console.log(error)
})
})

export default router;

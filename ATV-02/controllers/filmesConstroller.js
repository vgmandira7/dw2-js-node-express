import express from "express";
import Filme from "../models/Filmes.js";

const router = express.Router();

// LISTAR FILMES
router.get("/filmes", (req, res) => {
  Filme.findAll()
    .then((filmes) => {
      res.render("filmes", {
        filmes,
        activeLink: "filmes",
      });
    })
    .catch((error) => console.log(error));
});

// CADASTRAR FILME
router.post("/filmes/new", (req, res) => {
  const { titulo, diretor, ano, genero, duracao, avaliacao } = req.body;

  Filme.create({ titulo, diretor, ano, genero, duracao, avaliacao })
    .then(() => res.redirect("/filmes"))
    .catch((err) => console.log(err));
});

// DELETAR FILME
router.get("/filmes/delete/:id", (req, res) => {
  const id = req.params.id;

  Filme.destroy({ where: { id } })
    .then(() => res.redirect("/filmes"))
    .catch((err) => console.log(err));
});

// CARREGAR FORMULÁRIO DE EDIÇÃO
router.get("/filmes/edit/:id", (req, res) => {
  const id = req.params.id;

  Filme.findByPk(id)
    .then((filme) => {
      res.render("filmeEdit", { filme });
    })
    .catch((err) => console.log(err));
});

// ATUALIZAR FILME
router.post("/filmes/update/:id", (req, res) => {
  const id = req.params.id;
  const { titulo, diretor, ano, genero, duracao, avaliacao } = req.body;

  Filme.update(
    { titulo, diretor, ano, genero, duracao, avaliacao },
    { where: { id } }
  )
    .then(() => res.redirect("/filmes"))
    .catch((err) => console.log(err));
});

export default router;

import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/generos", function (req, res) {
  const generos = [
    { nome: "Ação", filmes: 35, mediaAvaliacao: 8.4 },
    { nome: "Comédia", filmes: 42, mediaAvaliacao: 7.9 },
    { nome: "Drama", filmes: 58, mediaAvaliacao: 8.7 },
    { nome: "Ficção Científica", filmes: 21, mediaAvaliacao: 8.5 },
    { nome: "Terror", filmes: 15, mediaAvaliacao: 7.5 },
    { nome: "Animação", filmes: 28, mediaAvaliacao: 8.2 }
  ];
  res.render("generos", {
    generos: generos,
    // Adiciona a variável 'activeLink' com o valor 'filmes'
    activeLink: 'generos' 
  });
});


export default router;
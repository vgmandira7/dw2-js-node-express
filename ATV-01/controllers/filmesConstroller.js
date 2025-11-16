import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/filmes", function (req, res) {
      const filmes = [
        { titulo: "Um Sonho de Liberdade", diretor: "Frank Darabont", ano: 1994, genero: "Drama", duracao: "2h 22min", avaliacao: 9.3 },
        { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", ano: 1972, genero: "Crime", duracao: "2h 55min", avaliacao: 9.2 },
        { titulo: "Batman: O Cavaleiro das Trevas", diretor: "Christopher Nolan", ano: 2008, genero: "Ação", duracao: "2h 32min", avaliacao: 9.0 },
        { titulo: "Pulp Fiction: Tempo de Violência", diretor: "Quentin Tarantino", ano: 1994, genero: "Crime", duracao: "2h 34min", avaliacao: 8.9 },
        { titulo: "Forrest Gump", diretor: "Robert Zemeckis", ano: 1994, genero: "Drama", duracao: "2h 22min", avaliacao: 8.8 },
        { titulo: "A Origem", diretor: "Christopher Nolan", ano: 2010, genero: "Sci-Fi", duracao: "2h 28min", avaliacao: 8.8 },
        { titulo: "Matrix", diretor: "Wachowski Brothers", ano: 1999, genero: "Sci-Fi", duracao: "2h 16min", avaliacao: 8.7 }
      ];
  res.render("filmes", {
    filmes:filmes,
    activeLink: 'filmes' 
  });
});


export default router;
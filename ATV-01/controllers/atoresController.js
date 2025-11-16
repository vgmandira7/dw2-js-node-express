import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/atores", function (req, res) {

  const atores = [
  {nome: "Leonardo DiCaprio", anoNasc: "1974", nacionalidade: "American", obras: "Titanic, Inception, The Revenant", premios: "42"},
  {nome: "Meryl Streep", anoNasc: "1949", nacionalidade: "American", obras: "The Devil Wears Prada, Sophie's Choice", premios: "159"},
  {nome: "Tom Hanks", anoNasc: "1956", nacionalidade: "American", obras: "Forrest Gump, Cast Away, Saving Private Ryan", premios: "89"},
  {nome: "Scarlett Johansson", anoNasc: "1984", nacionalidade: "American", obras: "Lost in Translation, Avengers, Marriage Story", premios: "67"},
  {nome: "Robert De Niro", anoNasc: "1943", nacionalidade: "American", obras: "Taxi Driver, Goodfellas, The Godfather II", premios: "124"},
  {nome: "Natalie Portman", anoNasc: "1981", nacionalidade: "Israeli-American", obras: "Black Swan, V for Vendetta, Jackie", premios: "78"}
];
  res.render("atores", {
     atores: atores,
    // Adiciona a variável 'activeLink' com o valor 'filmes'
    activeLink: 'atores' 
  });
});


export default router;
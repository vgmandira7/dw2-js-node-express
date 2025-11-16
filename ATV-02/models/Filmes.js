import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define("filmes", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duracao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avaliacao: {
    type: Sequelize.DECIMAL(3, 1), // permite valores como 9.8, 8.7, etc.
    allowNull: false,
  },
});

Filme.sync({ force: false });

export default Filme;

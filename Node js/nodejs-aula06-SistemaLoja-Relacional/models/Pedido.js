import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Essa linha cria a tabela no banco
// Pedido.sync({ force: false });

export default Pedido;

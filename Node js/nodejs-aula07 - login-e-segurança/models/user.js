import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config";


const User = connection.define('users', {
    email: {
        type: Sequelize.toString,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
User.sync({force: false})

export default User;
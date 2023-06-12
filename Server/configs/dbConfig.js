import Sequelize from "sequelize";

const sequelize = new Sequelize('todolist', 'root', 'Abcd@1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;


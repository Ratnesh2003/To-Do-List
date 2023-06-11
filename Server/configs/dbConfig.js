import Sequelize from "sequelize";

const sequelize = new Sequelize('mysql', 'root', 'Abcd@1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;


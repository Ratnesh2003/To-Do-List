import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/dbConfig.js";

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;
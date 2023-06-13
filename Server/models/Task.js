import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/dbConfig.js";

const Task = sequelize.define('Task', {
    taskId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    lastDate: {
        type: DataTypes.DATE
    }, 
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

export default Task;
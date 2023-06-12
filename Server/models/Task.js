import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/dbConfig";

const Task = sequelize.define('Task', {
    taskId: {
        type: DataTypes.STRING,
        allowNull: false
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
    }
});

export default Task;
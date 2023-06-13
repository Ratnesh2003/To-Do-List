import { v4 as uuidv4 } from "uuid";
import Task from "../models/Task.js";


// Create task
export const createTask = async (req, res) => {
    try {

        let {
            title,
            description,
            lastDate,
        } = req.body;

        const taskId = uuidv4();
        
        let newTask = {
            taskId: taskId,
            title: title,
            description: (description === "") ? null : description,
            lastDate: (lastDate === "") ? null : lastDate,
            userId: req.user.id
        }

        const savedTask = await Task.create(newTask);
        res.status(201).json({savedTask});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// Get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        const allTasks = await Task.findAll({
            where: {
                userId: userId
            }
        });
        res.status(200).json(allTasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Delete Task
export const deleteTask = async (req, res) => {
    try {


    } catch (err) {
        res.status(500).json({ error: err.message });
    }


}
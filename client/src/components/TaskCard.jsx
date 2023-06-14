import React, { useState } from "react";
import axiosAuthInstance from "../utils/requestInterceptor";
import { useDispatch } from "react-redux";
import { getTasks } from "../redux/taskList";


const TaskCard = ({task}) => {


    const dispatch = useDispatch();

    const handleDelete = async (taskId) => {
        await axiosAuthInstance.delete(`${process.env.REACT_APP_URL}delete/${taskId}`);
        dispatch(getTasks());
    }

    const handleComplete = async (taskId) => {
        await axiosAuthInstance.patch(`${process.env.REACT_APP_URL}complete/${taskId}`);
        dispatch(getTasks());
    }

    return (
        <div key={task.taskId}>
            <h3 style={task.isCompleted ? {textDecoration: "line-through"} : {}}>{task.title}</h3>      
            <p style={task.isCompleted ? {textDecoration: "line-through"} : {}}>{task.description}</p>
            <p>{task.lastDate}</p>
            <button type="button" onClick={() => handleComplete(task.taskId)}>Complete</button>      
            <button type="button" onClick={() => handleDelete(task.taskId)}>Delete</button>
        </div>
    )
}

export default TaskCard;
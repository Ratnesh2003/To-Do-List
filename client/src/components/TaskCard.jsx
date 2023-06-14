import React from "react";

const TaskCard = ({task}) => {
    return (
        <div key={task.taskId}>
            <h3>{task.title}</h3>      
            <p>{task.description}</p>
            <p>{task.lastDate}</p>
            <input type="checkbox"></input>      
        </div>
    )
}

export default TaskCard;
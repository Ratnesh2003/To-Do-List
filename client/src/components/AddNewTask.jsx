import { useState } from "react";
import axiosAuthInstance from "../utils/requestInterceptor";
import TaskPage from "../scenes/taskPage/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/taskList.js";

const AddNewTask = () => {
    const [values, setValues] = useState({
        title: "",
        description: ""
    });

    
    const [error, setError] = useState("");

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (values.title === "")
            setError("Title cannot be empty");
        else {
            await axiosAuthInstance.post(`${process.env.REACT_APP_URL}create`, values);
            dispatch(getTasks());
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter title of the task" name="title" onChange={handleInput} />
                <textarea placeholder="Enter description of the task" name="description" onChange={handleInput} />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
    
}

export default AddNewTask;
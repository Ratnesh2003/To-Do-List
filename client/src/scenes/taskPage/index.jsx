import { useEffect, useState } from "react";
import axiosAuthInstance from "../../utils/requestInterceptor.js";
import axios from "axios";

const TaskPage = () => {

    const [tasks, setTasks] = useState([]);


    const getTasks = () => {
        axiosAuthInstance.get(`${process.env.REACT_APP_URL}`)
        .then(res => {
            setTasks(res.data);
            console.log(res.data);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getTasks();
    }, []);
    
    return (
        <div>
            Nothing Here
        </div>
    )


}

export default TaskPage;
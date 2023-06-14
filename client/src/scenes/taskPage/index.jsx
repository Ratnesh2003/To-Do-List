import { useEffect, useState } from "react";
import axiosAuthInstance from "../../utils/requestInterceptor.js";
import TaskCard from "../../components/TaskCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../redux/taskList.js";

const TaskPage = () => {

    // const [tasks, setTasks] = useState([]);



    const { tasks } = useSelector(state => 
        state.taskList
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <div>
                {
                    tasks.length > 0
                        ? (<div>
                            {
                                tasks.map((task) => (
                                    <TaskCard task={task}></TaskCard>
                                ))
                            }

                        </div>)
                        : (
                            <div>
                                No tasks
                            </div>
                        )
                }
            </div>

        </div>
    )


}

export default TaskPage;
import AddNewTask from "./AddNewTask.jsx";
import TaskPage from "../scenes/taskPage/index.jsx";

const HomePage = () => {
    return (
        <div>
            <h2>To-Do-List</h2>
            <TaskPage />
            <AddNewTask />
        </div>
    )
}

export default HomePage;
import { Header } from "./Components/Header";
import AddTask from "./Components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment, createContext, useState} from "react";
import Task from "./Components/Task";


export const tasksContainer_context = createContext();
export const setTasks_context = createContext();

function App() {
  const [userTask, setUserTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const removeTask = (task_id) => {
    setTasks(tasks.filter(task => task.task_id !== task_id));
    console.log(task_id);
  
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="my-container">
        <Header title="Task Tracker" />

        <setTasks_context.Provider value = {setTasks}>
          <tasksContainer_context.Provider value = {tasks}>
            <AddTask userTask = {userTask} setUserTask = {setUserTask}/>
          </tasksContainer_context.Provider>
        </setTasks_context.Provider>

       

        <div className="content">

          {tasks.length > 0 ? tasks.map((task) => (
            <Task key = {task.task_id} task_id={task.task_id} userTask={task.task} removeTask = {removeTask}/>
         )) : null}

        </div>
      </div>
    </div>
  );
}

export default App;

import { Button, Form, InputGroup } from "react-bootstrap";
import { tasksContainer_context, setTasks_context } from "../App";
import Task from "./Task";
import "./AddTask.css";
import { useContext, useState } from "react";





const AddTask = ({userTask, setUserTask}) => {

  const tasksContainer = useContext(tasksContainer_context);
  const setTasks = useContext(setTasks_context);

  const [id, setId] = useState(0);

  const createTask = (newTask) => {
    setId(id + 1);
    if(userTask.length === 0){
      alert("Enter Task First!");
    } else {
      setTasks([...tasksContainer, newTask]);
      setUserTask("");
    }
  
  }

 





  return (
    <div className="add-task m-4">
      <InputGroup className="mb-3" size="lg"> 
        <Form.Control
          placeholder="Enter Task"
          aria-label="Enter Task"
          aria-describedby="enter-task"
          value = {userTask}
          onChange= {(e) => setUserTask(e.target.value)}

        />
        <Button
          variant="warning"
          className="text-secondary-emphasis"
          onClick={() => createTask({
            ...tasksContainer,
            task:userTask,
            task_id: id
         
          })}
        >
          Add Task
        </Button>

      </InputGroup>
    </div>
  );
};

export default AddTask;

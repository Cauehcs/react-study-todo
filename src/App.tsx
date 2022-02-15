import { useState } from "react";
import { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([1, 2, 3, 4]);

  function addTask() {
    setTasks([...tasks, tasks.length + 1]);
  }

  return (
    <>
      {
        tasks.map((task) => {
          return <Task title={task} key={task}/>;
        })
      }
      <button onClick={addTask}>Add Task</button>
    </>    
  );
}

export default App;

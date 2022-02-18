import { useState } from "react";
import { v4 as uuid } from 'uuid'

import { CreateTask } from "../../components/CreateTask";
import { Header } from "../../components/Header";
import { TodoSection } from "../../components/TodoSection";

import { Container } from "./styles";

type Task = {
  id: string;
  text: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function addTask(text: string) {
    setTasks([...tasks, { id: uuid(), text, done: false }]);
  }

  function toggleTask(id: string) {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  }

  return (
    <Container>
      <Header />

      <main>
        <TodoSection
          tasks={tasks.filter(task => !task.done)} 
          title="Incomplete" 
          onTaskToggle={toggleTask}
        >
          <CreateTask placeholder="Clique para adicionar uma task..." addTaskFn={addTask} />
        </TodoSection>
        <TodoSection 
          tasks={tasks.filter(task => task.done)} 
          title="Complete" 
          onTaskToggle={toggleTask}
        />
      </main>
    </Container>
  )
}
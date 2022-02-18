import { useState } from "react";
import { Container } from "./styles";

type TaskType = {
  id: string;
  text: string;
  done: boolean;
};

interface TaskProps {
  task: TaskType
  toggleTask: (id: string) => void
}

export function Task({ task, toggleTask }: TaskProps) {
  return (
    <Container done={task.done}>
      <input type="checkbox" onChange={() => toggleTask(task.id)} checked={task.done} />
      <p>{task.text}</p>
    </Container>
  )
}
import { ReactNode } from "react";
import { Task } from "../Task";
import { Container } from "./styles";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

interface TodoSectionProps {
  title: "Incomplete" | "Complete";
  tasks: Task[];
  children?: ReactNode;
  onTaskToggle: (id: string) => void;
}

export function TodoSection({
  title,
  tasks,
  onTaskToggle,
  children,
}: TodoSectionProps) {
  return (
    <Container title={title}>
      <strong>{title}</strong>

      <main>
        {tasks.map((task) => (
          <Task
            task={task}
            toggleTask={onTaskToggle}
          />
        ))}
        {children}
      </main>
    </Container>
  );
}

import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";

interface CreateTaskProps extends InputHTMLAttributes<HTMLInputElement> {
 addTaskFn: (text: string) => void
}

export function CreateTask({ addTaskFn, ...rest }: CreateTaskProps) {
  const [value, setValue] = useState("");

  function addTask() {
   if (!value) 
    return

   addTaskFn(value)
   setValue('')
  }

  return (
    <Container
      {...rest}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onBlur={addTask}
      onKeyPress={(event) => event.key === "Enter" && addTask()}
    />
  );
}

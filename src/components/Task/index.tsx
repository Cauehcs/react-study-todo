import { ReactChild, ReactFragment, ReactPortal } from "react";

export function Task(props: { title: string | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
 return (
  <div className="task">
    <h1>Task: {props.title}</h1>
    <input type="checkbox" />
  </div>
 )
}
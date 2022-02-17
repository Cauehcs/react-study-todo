import { useState } from "react";
import { Container } from "./styles";

export function Task() {
  const [done, setDone] = useState(false);

  return (
    <Container done={done}>
      <input type="checkbox" onChange={() => { setDone(!done) }} />
      <p>Mostrar Componentes</p>
    </Container>
  )
}
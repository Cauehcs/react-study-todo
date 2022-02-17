import { Header } from "../../components/Header";
import { TodoSection } from "../../components/TodoSection";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <TodoSection title="Incomplete" />
        <TodoSection title="Complete" />
      </main>
    </Container>
  )
}
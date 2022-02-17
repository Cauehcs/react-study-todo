import { Task } from '../Task'
import { Container } from './styles'

interface TodoSectionProps {
  title: 'Incomplete' | 'Complete'
}

export function TodoSection({ title }: TodoSectionProps) {
  return (
    <Container title={title}>
      <strong>{title}</strong>

      <main>
        <Task />
      </main>
    </Container>
  )
}
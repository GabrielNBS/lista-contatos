import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;Termo&ldquo;</p>

    <ul>
      <li>
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeTarefas

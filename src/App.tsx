import { Provider } from 'react-redux'
import store from './store'
import ListaContatos from './Components/ListaContato'
import GlobalStyle, { Container } from './styles'
import FormularioContato from './Components/FormularioContato'

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Container>
          <ListaContatos />
          <FormularioContato />
        </Container>
      </div>
    </Provider>
  )
}

export default App

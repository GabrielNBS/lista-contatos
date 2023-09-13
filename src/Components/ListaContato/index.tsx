import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removerContato,
  editarContato
} from '../../store/reducers/contatosSlice'
import { RootState } from '../../store'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

const ListaContatos: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contato)
  const dispatch = useDispatch()
  const [contatoEditando, setContatoEditando] = useState<Contato | null>(null)

  const handleRemoverContato = (id: number) => {
    dispatch(removerContato(id))
  }

  const handleEditarContato = (contato: Contato) => {
    setContatoEditando(contato)
  }

  const salvarEdicao = () => {
    if (contatoEditando) {
      dispatch(editarContato(contatoEditando))
      setContatoEditando(null)
    }
  }

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map(({ email, id, nome, telefone }) => (
          <li key={id}>
            {nome} ({email}, {telefone})
            <button onClick={() => handleRemoverContato(id)}>Remover</button>
            <button
              onClick={() => handleEditarContato({ id, nome, email, telefone })}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
      {contatoEditando && (
        <div>
          <h2>Editar Contato</h2>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={contatoEditando.nome}
            onChange={(e) =>
              setContatoEditando({ ...contatoEditando, nome: e.target.value })
            }
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contatoEditando.email}
            onChange={(e) =>
              setContatoEditando({ ...contatoEditando, email: e.target.value })
            }
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={contatoEditando.telefone}
            onChange={(e) =>
              setContatoEditando({
                ...contatoEditando,
                telefone: e.target.value
              })
            }
          />
          <button onClick={salvarEdicao}>Salvar Edição</button>
        </div>
      )}
    </div>
  )
}

export default ListaContatos

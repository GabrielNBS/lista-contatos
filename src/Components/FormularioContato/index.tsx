import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  adicionarContato,
  editarContato
} from '../../store/reducers/contatosSlice'
import { RootState } from '../../store'

const FormularioContato: React.FC = () => {
  const [contato, setContato] = useState({
    id: 0,
    nome: '',
    email: '',
    telefone: ''
  })
  const contatos = useSelector((state: RootState) => state.contato)
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContato({ ...contato, [name]: value })
  }

  const handleSubmit = () => {
    if (contato.id === 0) {
      const novoId = Math.max(...contatos.map((c) => c.id), 0) + 1
      dispatch(adicionarContato({ ...contato, id: novoId }))
    } else {
      dispatch(editarContato(contato))
    }
    setContato({ id: 0, nome: '', email: '', telefone: '' }) // Limpa o formulário após a ação
  }

  return (
    <div>
      <h2>Adicionar/Editar Contato</h2>
      <form>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={contato.nome}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={contato.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={contato.telefone}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          {contato.id === 0 ? 'Adicionar' : 'Editar'}
        </button>
      </form>
    </div>
  )
}

export default FormularioContato

// src/redux/contatosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type ContatosState = Contato[]

const initialState: ContatosState = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '123-456-7890'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@email.com',
    telefone: '987-654-3210'
  }
]

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload)
    },
    removerContato: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const { id, nome, email, telefone } = action.payload
      const contatoIndex = state.findIndex((contato) => contato.id === id)
      if (contatoIndex !== -1) {
        state[contatoIndex] = { id, nome, email, telefone }
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatosSlice'

const store = configureStore({
  reducer: {
    contato: contatoReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>

import { configureStore } from '@reduxjs/toolkit'
import jokeReducer from './slices/jokes'

const store = configureStore({
  reducer: {
    jokeState: jokeReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
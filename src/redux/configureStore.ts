import { configureStore } from '@reduxjs/toolkit'

// Reducers
import login from './login/loginStore'

const store = configureStore({
  reducer: {
    login: login.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type DispatchType = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export default store
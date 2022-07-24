import { createSlice } from '@reduxjs/toolkit'

type initialState = {
  data: {
    email: null | string
    password: null | string
  }, 
  error: boolean
}

const initialState: initialState = {
  data: {
    email: null,
    password: null
  },
  error: false
}

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setData(state, action) {
      state.data.email = action.payload.email
      state.data.password = action.payload.password
      state.error = false
    },
    setError(state) {
      state.error = true
    }
  }
})

export default login
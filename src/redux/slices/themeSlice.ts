import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTheme } from '../asyncActions/themeAsyncActions'
import { DefaultTheme } from 'styled-components/dist/types'

interface ThemeState {
  currentTheme: DefaultTheme | null
  isFetching: boolean
}

const initialState: ThemeState = {
  currentTheme: null,
  isFetching: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTheme.fulfilled,
        (state, action: PayloadAction<DefaultTheme>) => {
          state.currentTheme = action.payload
          state.isFetching = false
        }
      )
      .addCase(fetchTheme.pending, (state) => {
        state.isFetching = true
      })
  },
})

export default themeSlice.reducer

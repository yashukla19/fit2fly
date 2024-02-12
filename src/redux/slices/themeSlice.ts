import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchTheme } from '../asyncActions/themeAsyncActions'
import { DefaultTheme } from 'styled-components/dist/types'

interface IThemeState {
  currentTheme: DefaultTheme
  isFetching: boolean
}

const defaultTheme: DefaultTheme = {
  colors: {
    bodyBackground: '#333',
    bodyText: '#fff',
    borderColorStandard: 'black',
    headerBackground: `#333`,
    leftNavBackground: `#666`,
  },
}

const initialState: IThemeState = {
  currentTheme: defaultTheme,
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

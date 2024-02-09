import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type TRootState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

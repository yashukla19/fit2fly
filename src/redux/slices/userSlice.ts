import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginUser } from '../asyncActions/userAsyncActions'
import { IUser } from '../../models/models'

interface IUserState {
  currentUser: string
  isFetching: boolean
}

const initialState: IUserState = {
  currentUser: '',
  isFetching: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<IUser>) => {
          state.currentUser = action.payload.username
          state.isFetching = false
        }
      )
      .addCase(loginUser.pending, (state) => {
        state.isFetching = true
      })
  },
})

export default userSlice.reducer

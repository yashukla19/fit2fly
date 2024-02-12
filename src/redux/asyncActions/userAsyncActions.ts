import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../models/models'


const loginUser = createAsyncThunk<IUser>(
  'user/loginUser',
  async () : Promise<IUser> => {
    const apiPromise = new Promise<IUser>((res) => {
      const data: IUser = {
        username: 'Yash'
      }

      setTimeout(() => res(data), 2000)
    })

    const data = await apiPromise
    return data
  }
)

export { loginUser }

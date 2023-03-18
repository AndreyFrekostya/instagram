import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  email: string | null,
  name:string | null,
  nick:string | null,
  id: string | null,
  ava: string | null
}

const initialState: IUser = {
  email: null, 
  name:null,
  nick:null,
  id: null,
  ava: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action){
        state.email=action.payload.email
        state.name=action.payload.name
        state.nick=action.payload.nick
        state.id=action.payload.id
        state.ava=action.payload.ava
    },
    removeUser(state){
        state.email=null
        state.name=null
        state.nick=null
        state.id=null
        state.ava=null
    }
  },
})

export const { setUser,removeUser } = userSlice.actions
export default userSlice.reducer
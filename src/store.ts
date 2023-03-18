import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './pages/signup/slices/UserSlice'
import  NavReducer from 'pages/MainPage/slices/NavBarSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    navbar: NavReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
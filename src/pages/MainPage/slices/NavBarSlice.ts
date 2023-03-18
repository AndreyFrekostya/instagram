import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
let initialState: string='Главная'
export const NavBarSlice=createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        changeOption:(_, action)=>action.payload
    }
})
export const {changeOption}=NavBarSlice.actions
export default NavBarSlice.reducer
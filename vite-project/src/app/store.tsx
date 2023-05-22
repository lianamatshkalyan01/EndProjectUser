import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "../feachers/usersSlice"

export const store = configureStore({
    reducer:{
        users: usersReducer
    }
})
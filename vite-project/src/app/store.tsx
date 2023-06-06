import {configureStore} from "@reduxjs/toolkit"
import usersReducer from "../feachers/usersSlice"
import productsReducer from "../feachers/productsSlice"
import categoriesReducer from "../feachers/categoriesSlice"
import undercategoriesReducer from "../feachers/undercategoriesSlice"
import cartReducer from "../feachers/cartItemsSlice"

export const store = configureStore({
    reducer:{
        users: usersReducer,
        products: productsReducer,
        categories: categoriesReducer,
        undercategories: undercategoriesReducer,
        carts: cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

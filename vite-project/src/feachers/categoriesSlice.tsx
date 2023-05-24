import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../app/store";

interface Category{
    id:number;
    name: string;
    img: string;
}

interface CategoriesState{
    status: "test" | "loading" | "success" | "error"
    categories: Category[];
    error: string | null
}

const initialState: CategoriesState={
    status:"test",
    categories: [],
    error: null
}

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async()=>{
    const res = await fetch("http://localhost:5000/cat/categories")
    const json = res.json()
    return json
})

export const fetchCategoriesId = createAsyncThunk("categories/fetchCategoriesId", async(id:number)=>{
    const res = await fetch(`http://localhost:5000/cat/${id}`)
    const json = res.json()
    return json
})

const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchCategories.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>)=>{
            state.status = "success";
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, (state)=>{
            state.status = "error"
        })
        .addCase(fetchCategoriesId.fulfilled, (state, action: PayloadAction<Category>)=>{
            state.status = "success";
            state.categories = [action.payload]
        })
    }
})

export default categoriesSlice.reducer
export const allCategories = (state: RootState): Category[]=> state.categories.categories



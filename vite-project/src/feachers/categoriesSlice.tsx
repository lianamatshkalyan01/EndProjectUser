import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

interface Category{
    name: string;
    img: string;
}

interface CategoriesState{
    status: string;
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

const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchCategories.pending, (state, action)=>{
            state.status = "loading"
            console.log(action)
        })
        .addCase(fetchCategories.fulfilled, (state, {payload})=>{
            state.status = "success";
            state.categories = payload
        })
        .addCase(fetchCategories.rejected, (state, action)=>{
            state.status = "error"
            console.log(action)
        })
    }
})

export default categoriesSlice.reducer


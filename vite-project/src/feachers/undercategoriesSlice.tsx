import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

interface UnderCategory{
    name: string;
    underCategory_id:number;
}

interface UnderCategoriesState{
    status: string;
    undercategories: UnderCategory[];
    error: string | null
}

const initialState: UnderCategoriesState={
    status:"test",
    undercategories: [],
    error: null
}

export const fetchUnderCategories = createAsyncThunk("undercategories/fetchUnderCategories", async()=>{
    const res = await fetch("http://localhost:5000/under/undercategories")
    const json = res.json()
    return json
})

const categoriesSlice = createSlice({
    name:"undercategories",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUnderCategories.pending, (state, action)=>{
            state.status = "loading"
            console.log(action)
        })
        .addCase(fetchUnderCategories.fulfilled, (state, {payload})=>{
            state.status = "success";
            state.undercategories = payload
        })
        .addCase(fetchUnderCategories.rejected, (state, action)=>{
            state.status = "error"
            console.log(action)
        })
    }
})

export default categoriesSlice.reducer
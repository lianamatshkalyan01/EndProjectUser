import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../app/store";

interface UnderCategory{
    id:number;
    name: string;
    category_id:number;
}

interface UnderCategoriesState{
    status: "test" | "loading" | "success" | "error";
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

export const fetchUnderCategoriesId = createAsyncThunk("undercategories/fetchUnderCategoriesId", async(id:number)=>{
    const res = await fetch(`http://localhost:5000/under/${id}`)
    const json = res.json()
    return json
})

const UndercategoriesSlice = createSlice({
    name:"undercategories",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchUnderCategories.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchUnderCategories.fulfilled, (state, action: PayloadAction<UnderCategory[]>)=>{
            state.status = "success";
            state.undercategories = action.payload
        })
        .addCase(fetchUnderCategories.rejected, (state)=>{
            state.status = "error"
        })
        .addCase(fetchUnderCategoriesId.fulfilled, (state, action: PayloadAction<UnderCategory>)=>{
            state.status = "success";
            state.undercategories = [action.payload]
        })
    }
})

export default UndercategoriesSlice.reducer
export const allUnderCategories = (state:RootState) : UnderCategory[] => state.undercategories.undercategories


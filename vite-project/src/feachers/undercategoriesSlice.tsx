import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../app/store";

interface UnderCategory{
    id:string;
    name: string;
    category_id:number; 
    Products: products [];
}

interface products{
    id:number;
    name: string;
    price: number;
    type: string;
    pack_quantity: number;
    img: string;
    dosage: string;
    composition: string;
    side_effect: string;
    instruction: string;
    storage_condition: string;
    undercategories_id: number
}

interface UnderCategoriesState{
    status: "test" | "loading" | "success" | "error";
    undercategories: UnderCategory[];
    error: null
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

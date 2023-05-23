import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../app/store"

interface Product{
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

interface ProductsState{
    status: "idle" | "loading" | "success" | "error"
    products: Product[];
    error: string | null
}

const initialState: ProductsState={
    status:"idle",
    products: [],
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async()=>{
    const res = await fetch("http://localhost:5000/prod/products")
    const json = res.json()
    return json
})

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>)=>{
            state.status = "success";
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state)=>{
            state.status = "error";
        })
    }
})

export default productsSlice.reducer
export const allProducts = (state: RootState): Product[] => state.products.products;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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

interface Cart{
    name: string;
    price: number;
    Product: Product
}

interface CartState{
    status:string,
    carts:Cart[],
    error: null | string
}

const initialState: CartState = {
    status:'success',
    carts:[],
    error:null
}

export interface Ids{
    product_id: number,
    user_id: number
}

export const createCart = createAsyncThunk('carts/createCart', async({product_id, user_id}:Ids)=>{
    const res = await fetch('http://localhost:5000/items/new',{
        method:'Post',
        body:JSON.stringify({
            product_id,
            user_id,
            quantity:1
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    const json = res.json()
    return json
})


export const getCart = createAsyncThunk("carts/getCart", async(id?: string)=>{
    const res = await fetch(`http://localhost:5000/items/${id}`)
    const json =  await res.json()
    return json
})

const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createCart.fulfilled, (state, action)=>{
            state.status = 'success'
            state.carts = action.payload
        }).addCase(getCart.fulfilled, (state, action)=>{
            state.status = 'success'
            state.carts = action.payload
        })
    }
})

export default cartSlice.reducer
export const getCartItems = (state:RootState):Cart[]=> state.carts.carts


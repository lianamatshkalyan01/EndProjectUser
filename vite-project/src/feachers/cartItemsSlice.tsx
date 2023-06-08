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
    undercategories_id: number;
}

interface Cart{
    id: number;
    product_id: number;
    name: string;
    price: number;
    quantity:number;
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
    user_id: number,
    quantity:number
}

export const createCart = createAsyncThunk('carts/createCart', async({product_id, user_id, quantity}:Ids)=>{
    const res = await fetch('http://localhost:5000/items/new',{
        method:'Post',
        body:JSON.stringify({
            product_id,
            user_id,
            quantity
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    const json = res.json()
    return json
})

export const deleteCartItem = createAsyncThunk("carts/deleteCartItems", async(id:number)=>{
    const res = await fetch(`http://localhost:5000/items/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        },
    })
    const json = res.json()
    return json
})


export const getCart = createAsyncThunk("carts/getCart", async(id?: string)=>{
    const res = await fetch(`http://localhost:5000/items/${id}`)
    const json =  await res.json()
    return json
})

export const incrementCartItem = createAsyncThunk('cartitems/incrementCartItem', async(id: number)=>{
    const res = await fetch(`http://localhost:5000/items/increment/${id}`,{
        method:"PUT",
        body:JSON.stringify({
            quantity:1
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        },
    })
    const json = res.json()
    return json
})

export const decrementCartItem = createAsyncThunk('cartitems/decrementCartItem', async(id:number)=>{
    const res = await fetch(`http://localhost:5000/items/decrement/${id}`,{
        method:"PUT",
        body:JSON.stringify({
            quantity:1
        }),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        },
    })
    const json = res.json()
    return json
})

const cartSlice = createSlice({
    name:'carts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createCart.fulfilled, (state, action)=>{
            state.status = 'success'
            if(action.payload){
                state.carts.push(action.payload)
            }
            state.carts = action.payload
        }).addCase(getCart.fulfilled, (state, {payload})=>{
            (state.status = 'success'), (state.carts = payload)
        }).addCase(deleteCartItem.fulfilled,(state, {payload})=>{
            state.status = 'success'
            if(payload.cartItem){
                state.carts.push(payload.cartItem)
            }
        })
        .addCase(incrementCartItem.fulfilled, (state, {payload})=>{
            state.status = 'success'
            const product_id = payload.cartItem.product_id
            const cartItemIndex = state.carts.findIndex(
                (item)=> item.Product.id === product_id
            )
            if(cartItemIndex !== -1){
                state.carts[cartItemIndex].quantity +=1
            }
        }).addCase(decrementCartItem.fulfilled, (state, {payload})=>{
            state.status = 'succes'
            const cartItemId = payload.cartItem.product_id
            const cartItemIndex = state.carts.findIndex(
                (item)=> item.Product.id  === cartItemId
            )
            if(cartItemIndex !== -1){
                if(state.carts[cartItemIndex].quantity > 1){
                    state.carts[cartItemIndex].quantity -=1
                }
            }
        })
    }
})

export default cartSlice.reducer
export const getCartItems = (state:RootState):Cart[]=> state.carts.carts


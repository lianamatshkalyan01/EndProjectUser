import {useEffect} from "react"
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { AppDispatch } from "../../app/store"
import { getCart, getCartItems } from "../../feachers/cartItemsSlice"

function Cart(){
    const data = useSelector(getCartItems)
    const dispatch:AppDispatch = useDispatch()
    const {id}= useParams<{id?:string}>()
    console.log(data, "951951951")

    useEffect(()=>{
        dispatch(getCart(id))
    },[dispatch, id])

    return(
        <div>
            <h1>Cart</h1>
            {data?.map((cart)=>(
                <div key={cart?.Product?.id}>
                    <h3>{cart?.Product?.name}</h3>
                </div>
                
            ))}
        </div>
    )
}

export default Cart

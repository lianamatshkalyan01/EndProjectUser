import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { AppDispatch } from "../../app/store"
import { getCart, getCartItems, deleteCartItem } from "../../feachers/cartItemsSlice"
import {Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'

function Cart(){
    const data = useSelector(getCartItems) || [];
    console.log(getCartItems, "632163216321")
    const dispatch:AppDispatch = useDispatch()
    const {id}= useParams<{id?:string}>()
    console.log(data, "951951951")
    const[del, setIsdel]=useState<boolean>(false)

    useEffect(()=>{
        dispatch(getCart(id))
    },[dispatch, id, setIsdel])

    function deleteCart(id:number){
        dispatch(deleteCartItem(id))
        setIsdel(!del)
    }

    return(
        <div>
            <h1>Cart</h1>
            {data.length > 0 && data?.map((cart)=>(
                <div key={cart?.Product?.id}>
                    <div style={{display:'flex'}}>
                    <div>
                    <img
            src={`http://localhost:5000/${cart?.Product?.img}`}
            style={{ width: '350px', height: '400px' }}
            alt="Sample photo"
          />
                    </div>
                    <div style={{marginLeft:"20px", marginTop:'100px'}}> 
                    <h2>Name: {cart?.Product?.name}</h2>
                    <br />
                    <h3>Price: {cart?.Product?.price} AMD</h3>
                    </div>
                    <div>
                        <Button onClick={()=> deleteCart(cart?.Product.id)}>
                        <DeleteOutlined />
                        </Button>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Cart

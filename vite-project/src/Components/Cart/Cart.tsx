import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { getCart, getCartItems, deleteCartItem, incrementCartItem, decrementCartItem } from "../../feachers/cartItemsSlice";
import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { loadStripe } from '@stripe/stripe-js';
import PayButton from "./PayButton";

const { Text } = Typography;
const stripePromise = loadStripe('pk_test_51NHQL4HVy8HL7eDsyvqRYpKYjdkVMDI7FXgUqjLPvFEuANk7qhQGg5IbJtkSMTVETp2qAOX0FXElXkCCZCRcniec00XWmbChet');

export interface Order{
    cartItems: any[]; 
    buttonStyle?: React.CSSProperties;
}

function Cart() {
  const data = useSelector(getCartItems) || [];
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id?: string }>() ?? { id: "" };
  const [del, setIsdel] = useState<boolean>(false);

  console.log(data, "513515145151515154")

  useEffect(() => {
    if(id){
      dispatch(getCart(id));
    }
   
  }, [dispatch, id, setIsdel]);

  function deleteCart(id: number) {
    dispatch(deleteCartItem(id));
    setIsdel(!del);
  }

  function increment(id: number) {
    dispatch(incrementCartItem(id));
  }

  function decrement(id: number, quantity: number) {
    if (quantity < 1) {
      deleteCartItem(id);
    } else {
      dispatch(decrementCartItem(id));
    }
  }

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%", height:"1500px" }}>
      <h1 style={{ fontFamily: "cursive", color: "rgba(230, 126, 34,1)", marginLeft: "40%", fontSize: "35px", marginBottom: "2%" }}>Shopping Cart</h1>
      {data.length > 0 && data?.map((cart) => (
        <div key={cart?.Product?.id}>
          <div style={{ display: 'flex', marginBottom:"2%",marginTop:"4%", boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}>
            <div>
              <img
                src={`http://localhost:5000/${cart?.Product?.img}`}
                style={{ width: '350px', height: '200px', marginLeft: "2%", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                alt="Sample photo"
              />
            </div>
            <div style={{  marginLeft: "5%" }}>
              <h3>Name: {cart?.Product?.name}</h3>
              <h4 style={{ color: "grey" }}>Dosage: {cart?.Product?.dosage}</h4>
              <h4 style={{ color: "grey" }}>Type: {cart?.Product?.type}</h4>
              <h4 style={{ color: "grey" }}>Quantity in Pack: {cart?.Product?.pack_quantity}</h4>
            </div>
            <div style={{ display: 'flex', marginTop: "5%", marginLeft: "12%" }}>
              <Button style={{ marginTop: "10%" }} onClick={() => decrement(cart?.product_id, cart?.quantity)}>-</Button>
              <h3 style={{ marginLeft: "10%", marginRight: "10%" }}> {cart?.quantity}</h3>
              <Button style={{ marginTop: "10%" }} onClick={() => increment(cart?.product_id)}>+</Button>
            </div>
            <div style={{ marginTop: "4%", marginLeft: "12%" }}>
              <h4 style={{ fontSize: "25px" }}>{cart?.quantity * cart?.Product?.price} AMD</h4>
            </div>
            <div style={{ marginTop: "75px", marginLeft: "12%" }}>
              <Button onClick={() => deleteCart(cart?.Product.id)}>
                <DeleteOutlined style={{color:"red"}} />
              </Button>
            </div>
            
          </div>
        </div>
      ))}
      <PayButton cartItems={data} buttonStyle={{marginLeft: "90%", marginTop:'2%'}} />
      
    </div>
  );
}

export default Cart;



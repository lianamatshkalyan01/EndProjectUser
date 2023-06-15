import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { getCart, getCartItems, deleteCartItem, incrementCartItem, decrementCartItem } from "../../feachers/cartItemsSlice";
import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { fetchOrder, allOrders } from '../../feachers/orderSlice';
import PayButton from "./PayButton";
import StripeCheckout from "react-stripe-checkout";

const { Text } = Typography;
const stripePromise = loadStripe('pk_test_51NHQL4HVy8HL7eDsyvqRYpKYjdkVMDI7FXgUqjLPvFEuANk7qhQGg5IbJtkSMTVETp2qAOX0FXElXkCCZCRcniec00XWmbChet');

export interface Order{
    cartItems: any[]; 
}

function Cart() {
  const data = useSelector(getCartItems) || [];
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();
  const [del, setIsdel] = useState<boolean>(false);

  console.log(data, "513515145151515154")

  useEffect(() => {
    dispatch(getCart(id));
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
    <div style={{ backgroundColor: "#f8f8f8", marginLeft: "5%", marginRight: "5%" }}>
      <h1 style={{ fontFamily: "cursive", color: "rgba(230, 126, 34,1)", marginLeft: "40%", fontSize: "35px", marginBottom: "5%" }}>Shopping Cart</h1>

      {data.length > 0 && data?.map((cart) => (
        <div key={cart?.Product?.id}>
          <div style={{ display: "flex" }}>
            <Text italic style={{ color: "rgba(243, 156, 18,1)", marginLeft: "10%", fontSize: "30px" }}> Image </Text>
            <Text italic style={{ color: "rgba(243, 156, 18,1)", marginLeft: "15%", fontSize: "30px" }}> Product </Text>
            <Text italic style={{ color: "rgba(243, 156, 18,1)", marginLeft: "15%", fontSize: "30px" }}> Quantity </Text>
            <Text italic style={{ color: "rgba(243, 156, 18,1)", marginLeft: "12%", fontSize: "30px" }}> Price </Text>
            <Text italic style={{ color: "rgba(243, 156, 18,1)", marginLeft: "12%", fontSize: "30px" }}> Option </Text>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <img
                src={`http://localhost:5000/${cart?.Product?.img}`}
                style={{ width: '350px', height: '400px', marginLeft: "2%" }}
                alt="Sample photo"
              />
            </div>
            <div style={{ marginTop: '80px', marginLeft: "5%" }}>
              <h2>Name: {cart?.Product?.name}</h2>
              <h3 style={{ color: "grey" }}>Dosage: {cart?.Product?.dosage}</h3>
              <h3 style={{ color: "grey" }}>Type: {cart?.Product?.type}</h3>
              <h3 style={{ color: "grey" }}>Quantity in Pack: {cart?.Product?.pack_quantity}</h3>
            </div>
            <div style={{ display: 'flex', marginTop: "10%", marginLeft: "12%" }}>
              <Button style={{ marginTop: "10%" }} onClick={() => decrement(cart?.product_id, cart?.quantity)}>-</Button>
              <h3 style={{ marginLeft: "10%", marginRight: "10%" }}> {cart?.quantity}</h3>
              <Button style={{ marginTop: "10%" }} onClick={() => increment(cart?.product_id)}>+</Button>
            </div>
            <div style={{ marginTop: "9%", marginLeft: "12%" }}>
              <h3 style={{ fontSize: "25px" }}>{cart?.quantity * cart?.Product?.price} AMD</h3>
            </div>
            <div style={{ marginTop: "150px", marginLeft: "12%" }}>
              <Button onClick={() => deleteCart(cart?.Product.id)}>
                <DeleteOutlined />
              </Button>
            </div>
            
          </div>
        </div>
      ))}
      <PayButton cartItems={data} />
      
    </div>
  );
}

export default Cart;



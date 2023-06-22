import axios from "axios";
import {Button} from "antd"

export interface Order{
    cartItems: any[];
    buttonStyle?: React.CSSProperties;
}
const PayButton = ({ cartItems, buttonStyle}: Order)  => {

  const handleCheckout = () => {
    console.log(cartItems, "858888888888888888888888888")
    axios
      .post(`http://localhost:5000/order/new`, {
        cartItems,
        buttonStyle
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Button type="primary" style={buttonStyle} onClick={() => handleCheckout()}>Check out</Button>
    </>
  );
};

export default PayButton







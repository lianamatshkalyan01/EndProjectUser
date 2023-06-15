import axios from "axios";

export interface Order{
    cartItems: any[];
}
const PayButton = ({ cartItems}: Order)  => {

  const handleCheckout = () => {
    console.log(cartItems, "858888888888888888888888888")
    axios
      .post(`http://localhost:5000/order/new`, {
        cartItems
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
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton








//   fetch("http://localhost:5000/order/new", {
//         method: "POST",
//         body:JSON.stringify(order),
//         headers:{
//             "Content-Type": "application/json; charset=UTF-8",
//         }
//     })
//     return res.json()
// } catch(err){
//     throw new Error("order");
//   export const login = createAsyncThunk(
//     "users/login",
//     async ({ user }: { user: User }) => {
//       try {
//         const res = await fetch("http://localhost:5000/user/login", {
//           method: "POST",
//           body: JSON.stringify(user),
//           headers: {
//             "Content-Type": "application/json; charset=UTF-8",
//           },
//         });
//         return res.json();
//       } catch (err) {
//         console.log(err);
//         throw new Error("login failed");
//       }
//     }
//   );
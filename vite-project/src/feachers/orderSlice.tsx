import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { loadStripe } from "@stripe/stripe-js";

interface Order {
  cart_id: number;
  total_amount: number;
  products: string;
}

interface OrderState {
  status: "idle" | "loading" | "success" | "error";
  orders: Order[];
  error: string | null;
}

const initialState: OrderState = {
  status: "idle",
  orders: [],
  error: null,
};

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (order: Order) => {
    try {
      const res = await fetch("http://localhost:5000/order/new", {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to create order");
      }
      const data = await res.json();
      const orders = data.orders as Order[];

      const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY_PROD!);
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (error) {
          throw new Error(error.message);
        }
      } else {
        throw new Error("Failed to load Stripe.");
      }

      return orders;

      return res.json();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.status = "success";
        state.orders = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "fetch order failed";
      });
  },
});

export default orderSlice.reducer;

export const allOrders = (state: RootState): Order[] => state.order.orders;




  
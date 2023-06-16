import {Routes, Route} from "react-router-dom"
import { useState } from "react"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import CategoryId from "../Components/Category/CategoryId"
import ProductId from "../Components/Product/ProductId"
import UnderCategoryId from "../Components/UnderCategory/UnderCategoryId"
import Layout from "../Layouts/Layout"
import User from "../Pages/User/User"
import Cart from "../Components/Cart/Cart"
import About from "../Pages/About/About"
import ProtectedRoute from "./ProtectedRoute"
import { decodeToken } from "react-jwt";
import Information from "../Layouts/Footer/Information"
import UseFulLinks from "../Layouts/Footer/UseFulLinks"
import Wholesale_Price from "../Layouts/Footer/Wholesale_Price"
import Brands from "../Pages/Brand/Brands"
import SuccesfullPayment from "../Components/Cart/SuccesfullPayment"
import Favorite from "../Pages/Favorite/Favorite"

function AppRoutes(){
  const user = localStorage.getItem('user') || null;
  const decoded: any = user && decodeToken(JSON.parse(user)?.jwt);

  return (
    <div>
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout/>}> 
            <Route path='/' element={<Home/>} />
            <Route path="/:id" element={<ProductId />} />
            <Route path="/category/:id/undercategory" element={<CategoryId />} />
            <Route path="/undercategory/:id/product" element={<UnderCategoryId/>}/>
            <Route path="/user" element={<User/>} />
            <Route path="/cartItem/:id" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path='/information' element={<Information />} />
            <Route path="/usefullinks" element={<UseFulLinks />} />
            <Route path="/wholesaleprice" element={<Wholesale_Price />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/payment" element={<SuccesfullPayment />} />
            <Route path='/favorite/:id' element={<Favorite />} />
            </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes
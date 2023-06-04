import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import CategoryId from "../Components/Category/CategoryId"
import ProductId from "../Components/Product/ProductId"
import UnderCategoryId from "../Components/UnderCategory/UnderCategoryId"
import Layout from "../Layouts/Layout"
import User from "../Pages/User/User"
import Cart from "../Components/Cart/Cart"


function AppRoutes(){
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
            </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
// import Category from "../Components/Category/Category"
// import UnderCategory from "../Components/UnderCategory/UnderCategory"
import Product from "../Components/Product/Product"
import CategoryId from "../Components/Category/CategoryId"
import ProductId from "../Components/Product/ProductId"
import UnderCategoryId from "../Components/UnderCategory/UnderCategoryId"
import Layout from "../Layouts/Layout"
import User from "../Pages/User/User"
import Cart from "../Components/Cart/Cart"
// import UserCategory from "../Pages/User/UserCategory"
// import UserProductId from "../Pages/User/UserProductsId"
// import UserCategoryId from "../Pages/User/UserCategoryId"
// import UserProduct from "../Pages/User/UserProduct"
// import UserUnderCategoryId from "../Pages/User/UserUnderCategoryId"


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
            <Route path="/undercategory/:id/product" element={<Product />}/>
            <Route path="/undercategory" element={<UnderCategoryId />} />
            <Route path="/user" element={<User/>} />
            {/* <Route path='/user/category' element={<UserCategory/>} />
            <Route path="/user/:id" element={<UserProductId />} />
            <Route path="/user/category/:id/undercategory" element={<UserCategoryId />} />
            <Route path="/user/undercategory/:id/product" element={<UserProduct />}/>
            <Route path="/user/undercategory" element={<UserUnderCategoryId />} /> */}
            <Route path="/cartItem/:id" element={<Cart />} />
            </Route>
    </Routes>
    </div>
  )
}

export default AppRoutes
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
// import Category from "../Components/Category/Category"
import UnderCategory from "../Components/UnderCategory/UnderCategory"
import Product from "../Components/Product/Product"

function AppRoutes(){
  return (
    <Routes>
        <Route>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            {/* <Route path='/category' element={<Category />} /> */}
            <Route path="undercategory" element={<UnderCategory />} />
            <Route path="product" element={<Product />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { allProducts, fetchProductsId } from '../../feachers/productsSlice'
import { AppDispatch } from '../../app/store'
import { Button } from 'antd';
import { createCart } from "../../feachers/cartItemsSlice";
import {decodeToken} from 'react-jwt'

const ProductId : React.FC = ()=>{
  const data = useSelector(allProducts)
  const dispatch: AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchProductsId(Number(id)))
  }, [dispatch, id])

  function addToCart(id: number | undefined) {
    const token = localStorage.getItem("token");
    if (token && id) { 
      const decoded: any = token ? decodeToken(token) : null;
      dispatch(createCart({ product_id: id, user_id: decoded.id }));
    }
  }
  const product = data.find((product)=> product.id === Number(id))

  return(
    <div>
      <div>{product?.name}</div>
      <div>{product?.price}</div>
      <img
              src={`http://localhost:5000/${product?.img}`}
              alt="Sample photo"
            />
            <Button onClick={() => addToCart(product?.id)}>Add to Cart</Button>
    </div>
  )
}

export default ProductId





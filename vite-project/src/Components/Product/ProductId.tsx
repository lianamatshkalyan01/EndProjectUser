import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { allProducts, fetchProductsId } from '../../feachers/productsSlice'
import { AppDispatch } from '../../app/store'

const ProductId : React.FC = ()=>{
  const data = useSelector(allProducts)
  const dispatch: AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchProductsId(Number(id)))
  }, [dispatch, id])

  const product = data.find((product)=> product.id === Number(id))

  return(
    <div>
      <div>{product?.name}</div>
      <div>{product?.price}</div>
      <img
              src={`http://localhost:5000/${product?.img}`}
              alt="Sample photo"
            />
    </div>
  )
}

export default ProductId





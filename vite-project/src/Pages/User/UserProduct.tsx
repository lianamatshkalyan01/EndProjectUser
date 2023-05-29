import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { allProducts, fetchProducts } from './UserProductSlice'
import { AppDispatch } from '../../app/store'
import {Link} from 'react-router-dom'

const UserProduct : React.FC = ()=>{
  const data = useSelector(allProducts)
  const dispatch: AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
  console.log(data, "989898989898989898989898")

  const product = data.find((product)=> product.undercategories_id=== Number(id))
  console.log(product, "65656565")
    
  return (
    <div>
      {product && (
        <Link to={`user/${product.id}`}>
          <div>{product.name}</div>
        </Link>
      )}
    </div>
  )
}

export default UserProduct
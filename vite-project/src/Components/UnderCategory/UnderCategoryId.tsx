import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { allUnderCategories } from '../../feachers/undercategoriesSlice'
import { AppDispatch } from '../../app/store'
import { fetchUnderCategories } from '../../feachers/undercategoriesSlice'
import {Link} from 'react-router-dom'
 
const UnderCategoryId: React.FC = () =>{
  const data = useSelector(allUnderCategories)
  const dispatch:AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchUnderCategories())
  }, [])
  console.log(data, "llllllllllllllllll")

console.log(id, "222222222222222222222222222222222")
const undercategory = data.find((under) => under.category_id === Number(id));

console.log(undercategory, "ggggggggggggggg");


  const names = undercategory?.Products.map((prod): string=>{
    return prod.name
  })

  console.log(names, "kkkkkkkkkkkkkkkkkkk")

  return(
    <div>
      {names?.map((prod, index)=>(
        <Link to={`/${id}/product`} key={index}>
          <div>{prod}</div>
        </Link>
      ))}
    </div>
    )
}

export default UnderCategoryId


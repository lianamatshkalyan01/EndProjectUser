import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { allUnderCategories } from '../../feachers/undercategoriesSlice'
import { AppDispatch } from '../../app/store'
import { fetchCategoriesId } from '../../feachers/categoriesSlice'

const UnderCategoryId: React.FC = () =>{
  const data = useSelector(allUnderCategories)
  const dispatch:AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchCategoriesId(Number(id)))
  }, [dispatch, id])

  const undercategory = data.find((undercategory)=> undercategory.id ===Number(id))

  return(
    <div>
      <div>{undercategory?.name}</div>
    </div>
    )
}

export default UnderCategoryId


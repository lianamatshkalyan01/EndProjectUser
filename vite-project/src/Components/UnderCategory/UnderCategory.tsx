import { AppDispatch } from "../../app/store";
import { allUnderCategories, fetchUnderCategories } from "../../feachers/undercategoriesSlice";
import {useSelector, useDispatch} from "react-redux"
import {useEffect} from "react"
import {Link} from "react-router-dom"

interface UnderCategory{
  id:number;
  name:string;
  category_id:number;
}

const UnderCategory : React.FC = ()=>{
  const data = useSelector(allUnderCategories)
  const dispatch: AppDispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUnderCategories())
  },[])
  console.log(data)

  return(
    <div>
      {data?.map((undercategory)=>(
        <Link to={`/undercategory/${undercategory.id}`} key={undercategory.id}>
          <div>{undercategory.name}</div>
        </Link>
      ))}
    </div>
  )
}


export default UnderCategory


import {useEffect} from "react"
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { AppDispatch } from "../../app/store"
import { allCategories, fetchCategories } from "./UserCategorySlice"
import {Link} from 'react-router-dom'


const UserCategoryId : React.FC = () =>{
    const data = useSelector(allCategories)
    const dispatch: AppDispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchCategories())
    }, []);

    console.log(data)

    const category = data.find((category) => category.id === Number(id));

    console.log(category, "101010101010101010101010")

    const names = category?.UnderCategories.map((under): { id: number, name: string } => {
      return {
        id: under.id,
        name: under.name
      };
    });
    
    return(
        <div>
          {names?.map((under, index)=>(
            <Link to={`user/undercategory/${under.id}/product`}key={index}>
            <div>{under.name}</div>
            </Link>
          ))
          }

        </div>
    )
}

export default UserCategoryId
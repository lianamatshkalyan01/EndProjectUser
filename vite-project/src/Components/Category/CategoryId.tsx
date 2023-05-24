import {useEffect} from "react"
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { AppDispatch } from "../../app/store"
import { allCategories, fetchCategoriesId } from "../../feachers/categoriesSlice"


const CategoryId : React.FC = () =>{
    const data = useSelector(allCategories)
    const dispatch: AppDispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchCategoriesId(Number(id)));
    }, [dispatch, id]);

    const category = data.find((category) => category.id === Number(id));

    return(
        <div>
            <div>{category?.name}</div>
            <img src={`http://localhost:5000/${category?.img}`}
            alt="Sample photo" />
        </div>
    )
}

export default CategoryId

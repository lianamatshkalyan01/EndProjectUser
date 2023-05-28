import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch } from "../../app/store";
import { allCategories, fetchCategories } from "../../feachers/categoriesSlice";
import {Link} from "react-router-dom"

interface Category{
    id:number;
    name: string;
    img: string;
}

const Category: React.FC = () =>{
    const data = useSelector(allCategories)
    const dispatch: AppDispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])
    console.log(data)
    

    return(
        <div>
            {data?.map((category)=>(
                <Link to={`/category/${category.id}/undercategory`} key={category.id}>
                    <div>{category.name}</div>
                    {/* <img src={`http://localhost:5000/${category?.img}`}
                    alt="Sample photo" /> */}
                </Link>
            ))}
        </div>
    )
}

export default Category


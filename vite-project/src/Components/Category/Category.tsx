import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { allCategories, fetchCategories } from "../../feachers/categoriesSlice";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  img: string;
}

const Category: React.FC = () => {
  const data = useSelector(allCategories);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log(data);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop:'20px' }}>
      <div style={{ fontSize: '30px', fontWeight:"bolder" }}>
        Featured Categories
      </div>
      <div style={{ height: '200px', display: 'flex', marginLeft:"5%", marginTop:'20px', marginRight:"5%" }}>
        {data?.map((category) => (
          <Link to={`/category/${category.id}/undercategory`} key={category.id}>
            <div style={{ margin: '5px', borderRadius: '10px', textAlign: 'center', backgroundColor: 'rgba(251, 192, 147,1)' }}>
            <img src={`http://localhost:5000/${category?.img}`} alt="Sample photo" 
                style={{ height: "90%", width: "90%" }} />
              <div style={{ marginTop: '5px' }}>{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;


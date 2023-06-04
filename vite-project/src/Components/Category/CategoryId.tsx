import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { allCategories, fetchCategories } from "../../feachers/categoriesSlice";

const CategoryId: React.FC = () => {
  const data = useSelector(allCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const category = data.find((category) => category.id === Number(id));

  const names = category?.UnderCategories.map((under): { id: number, name: string } => {
    return {
      id: under.id,
      name: under.name
    };
  });

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#dddddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <div style={{ border: "solid 2px", borderRadius: '10px', backgroundColor:"white", marginTop:"20px", marginBottom:'20px' }}>
          <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            {names?.map((undercategory, index) => (
              <li key={index} style={{ listStyleType: 'none', textAlign: 'center', padding: '10px', margin: '10px' }}>
                <Link to={`/undercategory/${undercategory.id}/product`} style={{ textDecoration: 'none', fontSize: '25px' }}>
                  {undercategory.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CategoryId;

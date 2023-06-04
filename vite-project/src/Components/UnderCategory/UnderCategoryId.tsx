import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allUnderCategories, fetchUnderCategoriesId } from '../../feachers/undercategoriesSlice';
import { AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';

const UnderCategoryId: React.FC = () => {
  const data = useSelector(allUnderCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchUnderCategoriesId(parseInt(id)));
    }
  }, [dispatch, id]);

  console.log(data, '7474747474')

  const names = data.flatMap(underCategory => underCategory.Products);

  console.log(names, "95195195211")

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {names.map((product, index) => (
          <Link to={`/${product?.id}`} key={index} style={{ flex: 1, margin: '10px' }}>
            <div style={{ width: '200px', height: '200px' }}>
              <div>
                <img src={`http://localhost:5000/${product?.img}`} alt={product.name} style={{ width: '100%', height: '150px' }} />
              </div>
              <div>{product.name}</div>
              <div>{product.dosage}</div>
              <div>{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnderCategoryId;


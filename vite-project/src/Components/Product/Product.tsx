import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch} from '../../app/store';
import { allProducts, fetchProducts } from '../../feachers/productsSlice';
import {Link} from 'react-router-dom'

interface Product {
  id:number;
  name: string;
  price: number;
  type: string;
  pack_quantity: number;
  img: string;
  dosage: string;
  composition: string;
  side_effect: string;
  instruction: string;
  storage_condition: string;
  undercategories_id: number;
}

const Product: React.FC = () => {
    const data = useSelector(allProducts)
    const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(data)

  return (
    <div>
      {data?.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div>{product.name}</div>
          <img
              src={`http://localhost:5000/${product?.img}`}
              alt="Sample photo"
            />
        </Link>
      ))}
    </div>
  );
};

export default Product;



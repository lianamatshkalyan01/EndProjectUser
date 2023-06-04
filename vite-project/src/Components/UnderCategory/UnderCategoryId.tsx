import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allUnderCategories, fetchUnderCategoriesId } from '../../feachers/undercategoriesSlice';
import { AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {Button} from "antd"

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

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
    <div style={{backgroundColor: "rgba(205, 209, 228, 1)", marginLeft:"10%", marginRight:"10%"}}>
      <div style={{ display: 'flex' }}>
      <div style={{width:120}}>
        <div style={{backgroundColor:"white", borderRadius:"10px", marginLeft:"5px", marginTop:"5px"}}>
        <div style={{marginBottom:"10px", fontSize:"20px", fontWeight:"bolder"}}>Quantity in the Pack</div>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>1 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>2 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>5 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>6 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>10 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>12 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>14 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>15 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>20 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>28 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>30 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>100 pi</Checkbox>
        </div>
        <div style={{backgroundColor:"white", borderRadius:"10px", marginLeft:"5px", marginTop:"5px"}}>
        <div style={{marginTop:"20px", fontSize:"20px", fontWeight:"bolder", marginBottom:"10px"}}>Type</div>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Solute</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Packs</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Pill</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Liniment</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Powder</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Bottle</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Cream</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Spray</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Capsules</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Geld</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Drops</Checkbox>
        <Checkbox style={{fontSize:"18px"}}onChange={onChange}>Suppositories</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Salve</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={onChange}>Shampoo</Checkbox>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "50px", gap: "5px", marginTop: "5px", borderRadius: "10px", overflow: "hidden" }}>
  {names.map((product, index) => (
    <Link to={`/${product?.id}`} key={index} style={{ flex: '0 0 30.7%', margin: '10px', backgroundColor: "white", textDecoration: 'none' }}>
      <div style={{ width: '250px' }}>
        <div>
          <img src={`http://localhost:5000/${product?.img}`} alt={product.name} style={{ width: '100%', height: '200px' }} />
        </div>
        <div style={{ fontSize: "20px", color: "black" }}> Name: {product.name}</div> <br />
        <div style={{ fontSize: "20px", color: "black" }}>Dosage: {product.dosage}</div>
        <div style={{ fontSize: "25px", fontWeight: "bolder", color: "black" }}>Price: {product.price} AMD</div>
      </div>
      <Button style={{width:"140px", marginLeft:"100px", marginTop:"20px"}}> View More</Button>
    </Link>
  ))}
</div>
    </div>
    </div>
  );
};

export default UnderCategoryId;




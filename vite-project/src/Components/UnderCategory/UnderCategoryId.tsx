import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allUnderCategories, fetchUnderCategoriesId } from '../../feachers/undercategoriesSlice';
import { AppDispatch } from '../../app/store';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import {Button} from "antd"

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

  const[selectedPackQuantities, setSelectedPackQuantities] = useState<number[]>([])
  const[selectedTypes, setSelectedTypes]=useState<string[]>([])

  const onChangePackQuantity = (value: string, checked: boolean) => {
    const numericValue = parseInt(value);
  
    const updatedPackQuantities = checked
      ? [...selectedPackQuantities, numericValue]
      : selectedPackQuantities.filter((item) => item !== numericValue);
    setSelectedPackQuantities(updatedPackQuantities);
  };

  const onChangeType = (value:string, checked: boolean)=>{
    const updatedTypes = checked
    ? [...selectedTypes, value] 
    : selectedTypes.filter((item)=> item !== value)
  setSelectedTypes(updatedTypes)
  }

  const filteredProducts = data.flatMap(underCategory => underCategory.Products).filter((product)=>{
    if(selectedPackQuantities.length > 0 && !selectedPackQuantities.includes(product.pack_quantity)){
      return false
    }
    if(selectedTypes.length > 0 && !selectedTypes.includes(product.type)){
      return false
    }
    return true
  })

  console.log(filteredProducts, "95195195211")


  return (
    <div style={{backgroundColor: "rgba(205, 209, 228, 1)", marginLeft:"10%", marginRight:"10%"}}>
      <div style={{ display: 'flex' }}>
      <div style={{width:120}}>
        <div style={{backgroundColor:"white", borderRadius:"10px", marginLeft:"5px", marginTop:"5px"}}>
        <div style={{marginBottom:"10px", fontSize:"20px", fontWeight:"bolder"}}>Quantity in the Pack</div>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('1 pi', e.target.checked)}>1 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('2 pi', e.target.checked)}>2 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('5 pi', e.target.checked)}>5 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('6 pi', e.target.checked)}>6 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('10 pi', e.target.checked)}>10 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('12 pi', e.target.checked)}>12 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('14 pi', e.target.checked)}>14 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('15 pi', e.target.checked)}>15 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('20 pi', e.target.checked)}>20 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('28 pi', e.target.checked)}>28 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('30 pi', e.target.checked)}>30 pi</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=> onChangePackQuantity('100 pi', e.target.checked)}>100 pi</Checkbox>
        </div>
        <div style={{backgroundColor:"white", borderRadius:"10px", marginLeft:"5px", marginTop:"5px"}}>
        <div style={{marginTop:"20px", fontSize:"20px", fontWeight:"bolder", marginBottom:"10px"}}>Type</div>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Solute', e.target.checked)}>Solute</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Packs', e.target.checked)}>Packs</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Pill', e.target.checked)}>Pill</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Liniment', e.target.checked)}>Liniment</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Powder', e.target.checked)}>Powder</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Bottle', e.target.checked)}>Bottle</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Cream', e.target.checked)}>Cream</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Spray', e.target.checked)}>Spray</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Capsules', e.target.checked)}>Capsules</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Geld', e.target.checked)}>Geld</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Drops', e.target.checked)}>Drops</Checkbox>
        <Checkbox style={{fontSize:"18px"}}onChange={(e)=>onChangeType('Suppositories', e.target.checked)}>Suppositories</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Salve', e.target.checked)}>Salve</Checkbox>
        <Checkbox style={{fontSize:"18px"}} onChange={(e)=>onChangeType('Shampoo', e.target.checked)}>Shampoo</Checkbox>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "50px", gap: "5px", marginTop: "5px", borderRadius: "10px", overflow: "hidden" }}>
  {filteredProducts.map((product, index) => (
    <Link to={`/${product?.id}`} key={index} style={{ flex: '0 0 30.7%', margin: '10px', backgroundColor: "white", textDecoration: 'none' }}>
      <div style={{ width: '250px' }}>
        <div>
          <img src={`http://localhost:5000/${product?.img}`} alt={product.name} style={{ width: '100%', height: '200px', marginLeft:"10px" }} />
        </div>
        <div style={{ fontSize: "20px", color: "black", marginLeft:"10px" }}> Name: {product.name}</div> <br />
        <div style={{ fontSize: "20px", color: "black", marginLeft:"10px" }}>Dosage: {product.dosage}</div>
        <div style={{ fontSize: "25px", fontWeight: "bolder", color: "black", marginLeft:"10px" }}>Price: {product.price} AMD</div>
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




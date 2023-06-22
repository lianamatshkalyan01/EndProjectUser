import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Input, Button } from 'antd';
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { allUnderCategories, fetchUnderCategoriesId } from '../../feachers/undercategoriesSlice';
import { AppDispatch } from '../../app/store';

const { Search } = Input;

const UnderCategoryId: React.FC = () => {
  const data = useSelector(allUnderCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteProducts, setFavoriteProducts] = useState<number[]>([]);
  const [selectedPackQuantities, setSelectedPackQuantities] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchUnderCategoriesId(parseInt(id)));
    }
  }, [dispatch, id]);

  const onChangePackQuantity = (value: string, checked: boolean) => {
    const numericValue = parseInt(value);

    const updatedPackQuantities = checked
      ? [...selectedPackQuantities, numericValue]
      : selectedPackQuantities.filter((item) => item !== numericValue);
    setSelectedPackQuantities(updatedPackQuantities);
  };

  const onChangeType = (value: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...selectedTypes, value]
      : selectedTypes.filter((item) => item !== value);
    setSelectedTypes(updatedTypes);
  };

  const filteredProducts = data
    .flatMap(underCategory => underCategory.Products)
    .filter((product) => {
      if (selectedPackQuantities.length > 0 && !selectedPackQuantities.includes(product.pack_quantity)) {
        return false;
      }
      if (selectedTypes.length > 0 && !selectedTypes.includes(product.type)) {
        return false;
      }
      const productName = product.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return productName.includes(query);
    })
    .filter((product) => showFavoritesOnly ? favoriteProducts.includes(product.id) : true);

  const addFavoriteProduct = (product_id: number) => {
    setFavoriteProducts([...favoriteProducts, product_id]);
  };

  const removeFavoriteProduct = (product_id: number) => {
    setFavoriteProducts(favoriteProducts.filter((id) => id !== product_id));
  };

  const handleFavoriteClick = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  return (
    <div style={{ backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTpjHZsWk6HyKQoXWMesP99b0dkhozSqN4w&usqp=CAU")' }}>
      <div style={{display:"flex"}}>
      <Button onClick={handleFavoriteClick} style={{marginLeft:"21%" ,marginRight: '10px', fontSize: '20px', fontWeight: 'bolder', marginTop: '20px' }}>
      <HeartFilled style={{ color: 'orange', fontSize: '20px', fontWeight: 'bolder' }} />
        <span style={{ marginLeft: '5px' }}>Favorite</span>
    </Button>
      <div>
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          style={{ width: 400, marginLeft: '137%', marginTop: '15px', marginBottom: '20px' }}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      </div>
      
      <div style={{ display: 'flex', marginLeft: "10%", marginRight: "10%" }}>
        <div style={{ width: 120 }}>
          <div style={{ backgroundColor: "white", borderRadius: "10px", marginLeft: "5px", marginTop: "20px", height:"350px", overflowY: "scroll" }}>
            <div style={{ marginBottom: "10px", fontSize: "20px", fontWeight: "bolder" }}>Quantity in the Pack</div>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('1 pi', e.target.checked)}>1 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('2 pi', e.target.checked)}>2 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('5 pi', e.target.checked)}>5 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('6 pi', e.target.checked)}>6 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('10 pi', e.target.checked)}>10 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('12 pi', e.target.checked)}>12 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('14 pi', e.target.checked)}>14 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('15 pi', e.target.checked)}>15 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('20 pi', e.target.checked)}>20 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('28 pi', e.target.checked)}>28 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('30 pi', e.target.checked)}>30 pi</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangePackQuantity('100 pi', e.target.checked)}>100 pi</Checkbox>
          </div>
          <div style={{ backgroundColor: "white", borderRadius: "10px", marginLeft: "5px", marginTop: "25px", boxShadow: "0 0 5px grey", height:"350px", overflowY: "scroll" }}>
            <div style={{ fontSize: "20px", fontWeight: "bolder" }}>Type</div>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Solute', e.target.checked)}>Solute</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Packs', e.target.checked)}>Packs</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Pill', e.target.checked)}>Pill</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Powder', e.target.checked)}>Powder</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Bottle', e.target.checked)}>Bottle</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Cream', e.target.checked)}>Cream</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Spray', e.target.checked)}>Spray</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Capsules', e.target.checked)}>Capsules</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Geld', e.target.checked)}>Geld</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Drops', e.target.checked)}>Drops</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Salve', e.target.checked)}>Salve</Checkbox>
            <Checkbox style={{ fontSize: "18px" }} onChange={(e) => onChangeType('Shampoo', e.target.checked)}>Shampoo</Checkbox>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "50px", gap: "5px", marginTop: "5px", borderRadius: "10px", overflow: "hidden", height:"900px", marginBottom:"3%" }}>
          {filteredProducts.map((product, index) => (
            <div key={index} style={{ flex: '0 0 30.7%', margin: '10px', backgroundColor: "white", textDecoration: 'none', boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}>
              <div style={{ width: '250px' }} >
                <div style={{marginLeft:"123%"}}>
                {favoriteProducts.includes(product?.id) ? (
                  <HeartFilled onClick={() => removeFavoriteProduct(product?.id)} 
                  style={{ fontSize: "24px", color: "orange" }}
                  />
                ) : (
                  <HeartOutlined onClick={() => addFavoriteProduct(product?.id)} 
                  style={{ fontSize: "24px", color: "orange" }}
                  />
                )}
                </div>
                <div>
                  <img src={`http://localhost:5000/${product?.img}`} alt={product.name} style={{ width: '100%', height: '150px', marginLeft: "45px", boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'}} />
                </div>
                <div style={{ fontSize: "20px", color: "black", marginLeft: "10px", marginTop:"30px", textAlign:"center" }}> Name: {product.name}</div> <br />
                <div style={{ fontSize: "20px", color: "black", marginLeft: "10px", textAlign:"center" }}>Dosage: {product.dosage}</div>
                <div style={{ fontSize: "25px", fontWeight: "bolder", color: "black", marginLeft: "10px", marginBottom:"5px", textAlign:"center" }}>Price: {product.price} AMD</div>
              </div>
              <Link to={`/${product?.id}`} >
              <Button style={{ width: "140px", marginLeft: "100px", boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)' }}> View More</Button>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderCategoryId;




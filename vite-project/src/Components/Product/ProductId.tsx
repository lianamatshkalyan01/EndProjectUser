import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allProducts, fetchProductsId } from '../../feachers/productsSlice';
import { AppDispatch } from '../../app/store';
import { Button } from 'antd';
import { createCart } from "../../feachers/cartItemsSlice";
import { decodeToken } from 'react-jwt';
import { useRef, useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const ProductId: React.FC = () => {
  const data = useSelector(allProducts);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const [value, setValue] = useState(3);
  const [activeKey, setActiveKey] = useState('1');
  const [items, setItems] = useState([
    { label: 'Composition', children: '', key: '1' },
    { label: 'Side Effect', children: '', key: '2' },
    { label: 'Instruction', children: '', key: '3' },
    { label: 'Storage Condition', children: '', key: '4' },
  ]);

  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  useEffect(() => {
    dispatch(fetchProductsId(Number(id)));
  }, [dispatch, id]);

  function addToCart(id: number | undefined) {
    if (id) {
      const user = localStorage.getItem("user");
      if (user) {
        const decoded: any = decodeToken(JSON.parse(user)?.jwt);
        dispatch(createCart({ product_id: id, user_id: decoded.id }));
      }
    }
  }

  const product = data.find((product) => product.id === Number(id));

  useEffect(() => {
    if (product) {
      setItems([
        { label: 'Composition', children: product.composition, key: '1' },
        { label: 'Side Effect', children: product.side_effect, key: '2' },
        { label: 'Instruction', children: product.instruction, key: '3' },
        { label: 'Storage Condition', children: product.storage_condition, key: '4' },
      ]);
    }
  }, [product]);

  return (
    <div >
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={`http://localhost:5000/${product?.img}`}
            style={{ width: '500px', height: '400px' }}
            alt="Sample photo"
          />
        </div>
        <div style={{marginTop:"7%", marginLeft:"2%"}}>
          <div style={{fontSize:"25px", fontWeight:'bold'}}>Name: {product?.name} {product?.dosage}</div>
          <br />
          <span style={{fontSize:"20px"}}>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? <span style={{fontSize:"20px"}}>{desc[value - 1]}</span> : ''}
          </span>
          <br />
          <br />
          <div style={{fontSize:"20px", fontWeight:'bold', color:'grey'}}>Type: {product?.type}</div>
          <div style={{fontSize:"20px", fontWeight:'bold', color:'grey'}}>Quantity in the Pack: {product?.pack_quantity}</div>
          <br />
          <br />
          <div style={{display:"flex"}}>
          <Button shape="circle" style={{marginTop:"12px", fontWeight:"bold"}}>+</Button>
          <p style={{marginLeft:"5%", marginRight:"5%", fontSize:"20px", fontWeight:"bold"}}>1</p>
          <Button shape="circle" style={{marginTop:"12px", fontWeight:"bold"}}>-</Button>
          </div>
          </div>
          <div style={{marginTop:"18%", marginLeft:"10%"}}>
          <div style={{fontSize:"25px", fontWeight:"bold"}}>Price: {product?.price} AMD</div>
          </div>
          <div style={{marginTop:"18%", marginLeft:"5%"}}>
          <Button type="primary" onClick={() => addToCart(product?.id)}>Add to Cart</Button>
          </div>
      </div>
      <div style={{marginTop: "50px", marginLeft:"30%"}}>
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
        >
          {items.map(item => (
            <Tabs.TabPane tab={item.label} key={item.key} >
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default ProductId;


import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { allProducts, fetchProductsId } from '../../feachers/productsSlice';
import { AppDispatch } from '../../app/store';
import { Button } from 'antd';
import { createCart } from "../../feachers/cartItemsSlice";
import { decodeToken } from 'react-jwt';
import { useRef, useState } from 'react';
import { Tabs } from 'antd';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const ProductId: React.FC = () => {
  const data = useSelector(allProducts);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

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
    <div>
      <div style={{ display: "flex"}}>
        <div>
          <img
            src={`http://localhost:5000/${product?.img}`}
            style={{ width: '500px', height: '400px' }}
            alt="Sample photo"
          />
        </div>
        <div>
          <div>Name: {product?.name} {product?.dosage}</div>
          <div>Type: {product?.type}</div>
          <div>Quantity in the Pack: {product?.pack_quantity}</div>
          <div>Price: {product?.price} AMD</div>
          <Button onClick={() => addToCart(product?.id)}>Add to Cart</Button>
        </div>
      </div>
      <div style={{marginTop: "50px"}}>
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
        >
          {items.map(item => (
            <Tabs.TabPane tab={item.label} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default ProductId;


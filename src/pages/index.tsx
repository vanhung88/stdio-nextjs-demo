import type { NextPage } from 'next';
import S from './style.module.scss';
import { productList } from '../store/slices/productSlide';
import { useEffect } from 'react';
import { Carousel } from 'antd';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { getProducts } = useSelector((state: any) => state.product);
  const { products } = getProducts;
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(productList());
    };

    fetchData();
  }, []);
  function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
  }
  return (
    <div className={S.Wrapper}>
      <Carousel autoplay style={{ height: '100%', maxWidth: '100%' }}>
        <div>
          <img src='/images/slide1.jpg' style={{ width: '100%' }} />
        </div>
        <div>
          <img src='/images/slide2.jpg' style={{ width: '100%' }} />
        </div>
        <div>
          <img src='/images/slide3.jpg' style={{ width: '100%' }} />
        </div>
      </Carousel>
      <div>
        <p className={S.Text}>New Arrivals</p>
        <p
          style={{ textAlign: 'center', color: '#33333382', fontSize: '17px' }}
        >
          Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
          ut aliquid.
        </p>
      </div>
      <div className={S.ProductList}>
        {products?.map((item: any) => (
          <Cart
            name={item.name}
            price={item.price}
            image1={item.image1}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

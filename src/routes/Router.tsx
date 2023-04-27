import {Routes, Route, Navigate} from 'react-router-dom'
import React, {useState} from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import { products } from '../data/products';
import { featureProducts } from '../data/featureProducts';

export interface IRouterProps {};

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  const [productDetail, setProductDetail] = useState<number | null>(null);

  return (
    <Routes>
      <Route path="/" element ={<Navigate to='/home' />} />
      <Route path="home" element={<Home featureProducts={featureProducts} setProductDetail={ setProductDetail }/>}/>
      <Route path="products" element={<Products products={products} setProductDetail={ setProductDetail }/>}/>
      <Route path="products/:id" element={<ProductDetail productDetail={ productDetail } products={products} />}/>
      <Route path="cart" element={<Cart />} />
    </Routes>


  )
}

export default Router;

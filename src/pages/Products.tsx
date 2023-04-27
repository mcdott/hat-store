import React from 'react';
import { Layout, AlphaCard, Grid } from '@shopify/polaris';
import ProductCard from '../components/ProductCard/ProductCard';
import { Product } from '../types/types';

interface Props {
  products: Product[];
  setProductDetail: (productId: number) => void;
}

const ProductList: React.FC<Props> = ({ products, setProductDetail}) => {
  return (
    <Layout>
      <Layout.Section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AlphaCard>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {products.map((product) => (
                <div key={product.name} style={{ padding: '8px', width: '100%', maxWidth: '400px' }}>
                  <ProductCard product={product} setProductDetail={setProductDetail} />
                </div>
              ))}
            </div>
            </AlphaCard>
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default ProductList;

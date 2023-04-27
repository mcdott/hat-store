import React from 'react'
import {VerticalStack, Box, HorizontalStack, HorizontalGrid} from '@shopify/polaris';
import FeatureCard from './FeatureCard';
import { Product } from '../../types/types';

interface Props {
  featureProducts: Product[];
  setProductDetail: (productId: number) => void;
}

  const FeatureSection: React.FC<Props> = ({ featureProducts, setProductDetail}) => {
  return (
    <>
    <VerticalStack align="center" gap="4">
      <h2
      style={{
        marginTop: '50px',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
      Featured Products</h2>
      {/* <section  className='product_container'>
        <HorizontalStack gap="4" >
        {featureProducts.map((product)=>{
          return  (
            <Box id="box1" padding="4" width="550px">
              <FeatureCard product={product} setProductDetail={setProductDetail}/>
            </Box>
          )
        })}
        </HorizontalStack>
      </section> */}
    </VerticalStack>
<HorizontalGrid gap="4" columns={3}>
{featureProducts.map((product)=>{
          return  (
            <Box id="box1" padding="20">
              <FeatureCard product={product} setProductDetail={setProductDetail}/>
            </Box>
          )
        })}
      </HorizontalGrid>
      </>
  );
}


export default FeatureSection;

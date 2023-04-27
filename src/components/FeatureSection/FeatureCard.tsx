import React, { useState, useCallback }  from 'react';
import { Button, VerticalStack, HorizontalGrid, Text, TextField } from '@shopify/polaris';
import { Product } from '../../types/types';
import { Link } from 'react-router-dom';
import { addItems} from '../../redux/cartSlice/cartSlice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import {  toast } from 'react-toastify';

interface Props {
  product: Product;
  setProductDetail: (productId: number) => void;
}

const FeatureCard: React.FC<Props> = ({ product, setProductDetail }) => {
  const [quantity, setQuantity] = useState('1');
  const dispatch = useAppDispatch();

  const handleQuantityChange = useCallback(
    (newValue: string) => setQuantity(newValue),
    [],
  );

  const handleClick:any = () => {
    setProductDetail(product.id)
  }

  const addToCart = () => {
    dispatch(addItems({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      cost: product.price
    })
    );
    toast.success('Product added successfully');
    console.log('item add')
  }

  return (
    <HorizontalGrid columns={['twoThirds', 'oneThird']}>
      <VerticalStack gap="3" align="start">
      <img
        alt={product.name}
        width="95%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={product.image}
      />
          <Text as="h2" variant="headingMd" alignment='center'>
          {product.name}
          </Text>
          <Link to= {`/products/${product.id}`}>
           <Button
          onClick={ handleClick }
          plain>View Full Details</Button>
          </Link>
      </VerticalStack>
      <VerticalStack gap="3" align="center">
        <Text as="h2" variant="bodyLg" fontWeight='bold' alignment='center'>
          ${product.price}
        </Text>
          <Button 
          primary size="slim"
          onClick={addToCart}
          >Add to Cart</Button>
        </VerticalStack>
    </HorizontalGrid>
  );
};

export default FeatureCard

import React, { useState, useCallback } from 'react';
import { addItems} from '../../redux/cartSlice/cartSlice';
import { AlphaCard, Button, VerticalStack, Image, Text, TextField } from '@shopify/polaris';
import { Product } from '../../types/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks/hooks';
import {  toast } from 'react-toastify';

interface Props {
  product: Product;
  setProductDetail: (productId: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, setProductDetail }) => {
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
    <AlphaCard
    background="bg-subdued"
    padding={{xs: '4', sm: '5', md: '6', lg: '8', xl: '10'}}>
      <img
        alt={product.name}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={product.image}
      />
    <Text as="h2" variant="headingMd" alignment='start'>
    {product.name}
    </Text>
    <Text as="h2" variant="bodyLg" fontWeight='bold' alignment='center'>
    ${product.price}
    </Text>
    <VerticalStack gap="5">
             <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              autoComplete="off"
            />
          <Button 
          primary fullWidth
          onClick={addToCart}
          >Add to Cart</Button>
          <Link to= {`/products/${product.id}`}>
           <Button
          onClick={ handleClick }
          plain>View Full Details</Button>
          </Link>

          </VerticalStack>

    </AlphaCard>
  );
};

export default ProductCard;

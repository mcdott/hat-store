import { Product } from '../types/types';
import productsData from './products.json';

export const products: Product[] = productsData.hats.map((hat) => ({
  id: hat.id,
  name: hat.name,
  description: hat.description,
  price: hat.price,
  image: hat.image,
}));

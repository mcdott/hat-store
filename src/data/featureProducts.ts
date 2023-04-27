import { Product } from '../types/types';
import featureProductsData from './featureProducts.json';

interface FeatureProductsData {
  hats: Product[];
}

export const featureProducts: Product[] = (featureProductsData as FeatureProductsData).hats.map((hat) => ({
  id: hat.id,
  name: hat.name,
  description: hat.description,
  price: hat.price,
  image: hat.image,
}));

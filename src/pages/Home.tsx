import React from 'react';
import Header from '../components/Header/Header';
import AboutCard from '../components/AboutSection/MediaCard/AboutCard';
import FC from '../components/FeatureSection/FeatureSection';
import { Product } from '../types/types';

interface Props {
  featureProducts: Product[];
  setProductDetail: (productId: number) => void;
};

const HomePage: React.FC<Props> = ({ featureProducts, setProductDetail }) => {
  return (
    <>
    <Header/>
    <AboutCard />
    <FC featureProducts={featureProducts} setProductDetail={setProductDetail}/>
    </>
  )
}

export default HomePage

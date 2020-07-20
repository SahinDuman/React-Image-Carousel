import React from 'react';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';
import ImageNav from '../../components/ImageNav/ImageNav';
import './imageCarousel.css';

const ImageCarousel: React.FC = () => {
  return (
    <div className="carousel__container">
      <Header />
      <MainImage />
      <ImageNav />
    </div>
  )
}

export default ImageCarousel;

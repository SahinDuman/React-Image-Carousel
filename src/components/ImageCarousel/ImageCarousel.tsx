import React from 'react';
import Header from '../Header/Header';
import MainImage from '../MainImage/MainImage';
import ImageNav from '../ImageNav/ImageNav';

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

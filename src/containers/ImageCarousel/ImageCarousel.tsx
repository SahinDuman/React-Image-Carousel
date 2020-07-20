import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';
import ImageNav from '../../components/ImageNav/ImageNav';
import './imageCarousel.css';

import images from '../../data/carouselImages';

const ImageCarousel: React.FC = () => { 
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {}, [activeImage]);

  return (
    <div className="carousel__container">
      <Header />
      <MainImage imageObj={activeImage}/>
      <ImageNav 
        images={images} 
        activeId={activeImage.id} 
        setActiveImage={setActiveImage}
      />
    </div>
  )
}

export default ImageCarousel;

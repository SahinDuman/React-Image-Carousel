import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import MainImage from '../../components/MainImage/MainImage';
import ImageNav from '../../components/ImageNav/ImageNav';
import './imageCarousel.css';

import images from '../../data/carouselImages';

const ImageCarousel: React.FC = () => { 
  const [index, setIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(images[index]);

  useEffect(() => {
    setActiveImage(images[index])
  }, [index])


  return (
    <div className="carousel__container">
      <Header />
      <MainImage imageObj={activeImage}/>
      <ImageNav 
        images={images} 
        activeId={activeImage.id} 
        setIndex={setIndex} 
        index={index} 
      />
    </div>
  )
}

export default ImageCarousel;

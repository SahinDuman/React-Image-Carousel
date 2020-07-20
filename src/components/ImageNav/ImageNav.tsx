import React from 'react';
import './imageNav.css';
import { Image } from '../../models';

interface IProps {
  images: Image[],
  activeId: string,
  setActiveImage: (obj: Image) => void,
}

const ImageNav: React.FC<IProps> = ({ images, activeId, setActiveImage}) => {

  const index: number = images.findIndex((image:Image) => image.id === activeId);
  
  const next = () => {
    if (index < images.length - 1 && index !== -1) setActiveImage(images[index + 1]);
  }

  const prev = () => {
    if (index !== 0 && index !== -1) setActiveImage(images[index - 1]);
  };

  return (
    <div className="image-nav">

      <div className="image-nav__button-container">
        <button className="image-nav__button" onClick={prev}>Prev</button>
        <button className="image-nav__button main-color bold" onClick={next}>Next</button>
      </div>

      <div className="image-nav__thumbnails-container">
        {images.map((image: Image, index: number) => {
          
          const imgOnClick = () => setActiveImage(image);
          return (
            <img
              key={index}
              src={image.img}
              alt={image.title}
              id={image.id}
              onClick={imgOnClick}
              className={image.id === activeId
                ? 'image-nav__thumbnail-img active-thumbnail'
                : 'image-nav__thumbnail-img'}
            />
          )
        })}
      </div>

    </div>
  )
}

export default ImageNav

/*

        */
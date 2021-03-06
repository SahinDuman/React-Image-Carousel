import React from 'react';
import './mainImage.css';
import { Image } from '../../models';

interface IProps {
  imageObj: Image
}

const MainImage: React.FC<IProps> = ({imageObj}) => {
  return (
    <div className="main-image__container">
      <img src={imageObj.img}alt={imageObj.title} className="main-image__img" />

      <div className="main-image__title-container">
        <h2 className="main-image__title">{imageObj.title.length > 40 ? imageObj.title.slice(0, 37) + '...' : imageObj.title}</h2>
      </div>
    </div>
  )
}

export default MainImage

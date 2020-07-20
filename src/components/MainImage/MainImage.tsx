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
        <h2 className="main-image__title">{imageObj.title} dsadadas dasd asd asd asd asd asdad </h2>
      </div>
    </div>
  )
}

export default MainImage

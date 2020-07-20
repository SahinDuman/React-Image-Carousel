import React from 'react';
import './mainImage.css';

const MainImage: React.FC = () => {
  return (
    <div className="main-image__container">
      <img src="/img/img1.jpg" alt="img" className="main-image__img" />

      <div className="main-image__title-container">
        <h2 className="main-image__title">Title</h2>
      </div>
    </div>
  )
}

export default MainImage

import React from 'react';
import './imageNav.css';

const ImageNav: React.FC = () => {
  return (
    <div className="image-nav">

      <div className="image-nav__button-container">
        <button className="image-nav__button">Prev</button>
        <button className="image-nav__button main-color bold">Next</button>
      </div>

      <div className="image-nav__thumbnails-container">
      <img className="image-nav__thumbnail-img" src="/img/img1.jpg" alt="thumbnail" />
        <img className="image-nav__thumbnail-img" src="/img/img2.jpg" alt="thumbnail" />
        <img className="image-nav__thumbnail-img" src="/img/img3.jpg" alt="thumbnail" />
        <img className="image-nav__thumbnail-img" src="/img/img4.jpg" alt="thumbnail" />
        <img className="image-nav__thumbnail-img" src="/img/img5.jpg" alt="thumbnail" />
        <img className="image-nav__thumbnail-img" src="/img/img6.jpg" alt="thumbnail" />
      </div>

    </div>
  )
}

export default ImageNav

/*

        */
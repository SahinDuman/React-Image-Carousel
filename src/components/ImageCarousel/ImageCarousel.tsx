import React from 'react'

const ImageCarousel: React.FC = () => {
  return (
    <div className="carousel__container">
      <header className="header">
        <h1>Urban <span className="main-color">images</span></h1>
      </header>

      <div className="active-image">
        <img src="" alt="img" className="active-image__img" />

        <div className="active-image__title-container">
          <h2 className="active-image__title">Title</h2>
        </div>
      </div>

      <div className="image-nav">

        <div className="image-nav__button-container">
          <button className="image-nav__button">Prev</button>
          <button className="image-nav__button">Next</button>
        </div>

        <div className="image-nav__thumbnails-container">
          <img className="image-nav__thumbnail-img" src="" alt="thumbnail" />
          <img className="image-nav__thumbnail-img" src="" alt="thumbnail" />
          <img className="image-nav__thumbnail-img" src="" alt="thumbnail" />
        </div>
        
      </div>
    </div>
  )
}

export default ImageCarousel;

import React from 'react'

const ImageNav: React.FC = () => {
  return (
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
  )
}

export default ImageNav

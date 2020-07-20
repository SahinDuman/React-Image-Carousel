import React from 'react';
import './imageNav.css';
import { Image } from '../../models';
import images from '../../data/carouselImages';

interface IProps {
  images: Image[],
  activeId: string,
  setIndex: (num: number) => void,
  index: number
}

const ImageNav: React.FC<IProps> = ({images, activeId, setIndex, index}) => {

  const next = () => setIndex(index + 1);
  const prev = () => setIndex(index - 1);

  return (
    <div className="image-nav">

      <div className="image-nav__button-container">
        <button className="image-nav__button" onClick={prev}>Prev</button>
        <button className="image-nav__button main-color bold"  onClick={next}>Next</button>
      </div>

      <div className="image-nav__thumbnails-container">
        {images.map((image:Image) => {

          return(
            <img className={'image-nav__thumbnail-img' + image.id === activeId ? 'active' : ''} />
          )
        })}

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
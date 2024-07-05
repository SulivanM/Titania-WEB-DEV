import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';

const Carousel = ({ images }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const promises = images.map(image => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setImagesLoaded(true))
        .catch(err => console.error('Failed to preload images', err));
    };

    preloadImages();
  }, [images]);

  if (!imagesLoaded) {
    return null;
  }

  return (
    <section id="slideshow">
      <div className="entire-content">
        <div className="content-carrousel">
          {images.map((image, index) => (
            <figure className="shadow" key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={`Slide ${index + 1}`} />
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired
};

export default Carousel;

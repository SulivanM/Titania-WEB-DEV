import "./Carousel.scss"
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


const Carrousel = ({ images }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const promises = images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
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
          {images.map((src, index) => (
            <figure className="shadow" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Carrousel;

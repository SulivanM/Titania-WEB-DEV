
import { useState, useEffect } from 'react';
import './Home.scss';
import Ark from '../../assets/titania_ark.webp';
import Bob from '../../assets/titania_BOB.webp';
import Dod from '../../assets/titania_DOD.webp';
import Farm from '../../assets/titania_farming.webp';
import Gmod from '../../assets/Titania_GMOD_V2.webp';
import Path from '../../assets/titania_path.webp';
import Isle from '../../assets/titania_the_isle.webp';

const images = [Ark, Bob, Dod, Farm, Gmod, Path, Isle];

const Home = () => {
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
  }, []);

  if (!imagesLoaded) {
    return null; 
  }

  return (
    <div className='main'>
      <h1>Nos Jeux & Serveurs</h1>
      <p>Titania est partout ! Ordinateur, tablette, console ou téléphone.</p>
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
    </div>
  );
};

export default Home;
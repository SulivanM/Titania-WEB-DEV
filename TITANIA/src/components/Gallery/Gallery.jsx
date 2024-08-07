import { useState } from 'react';
import './Gallery.scss';

const Gallery = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);

  const handleClick = (index) => {
    const newPositions = [...positions];
    const heroIndex = positions.indexOf(0);
    newPositions[heroIndex] = positions[index];
    newPositions[index] = 0;
    setPositions(newPositions);
  };

  const images = [
    'https://th.bing.com/th/id/OIG3.Qo7LS5shmNWp.jNIyPg.?pid=ImgGn',
    'https://th.bing.com/th/id/OIG1.B8I9MllXTGeHE0d07.sq?w=1024&h=1024&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIG1.uYJhMOC4YH.O3KCPLmz0?w=1024&h=1024&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIG1.ohfopG8Bm66Ja4KksSs5?w=1024&h=1024&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIG1.maRIw7cx7vAGk2CRxs9B?w=1024&h=1024&rs=1&pid=ImgDetMain',
  ];

  const alts = [
    'Evenements',
    'Boutique',
    'Concours',
    'Recrutements',
    'Partenaires',
  ];

  const anchors = [
    '#evenements',
    '#boutique',
    '#concours',
    '#recrutements',
    '#partenaires',
  ];

  return (
    <div className="gallery">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="item"
          data-pos={pos}
          onClick={() => handleClick(index)}
        >
          {pos === 0 ? (
            <a href={anchors[index]}>
              <img src={images[index]} alt={alts[index]} />
            </a>
          ) : (
            <img src={images[index]} alt={alts[index]} />
          )}
        </div>
      ))}
    </div>
  );
};


export default Gallery;

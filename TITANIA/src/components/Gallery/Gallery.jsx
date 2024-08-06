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
    'https://images.unsplash.com/photo-1437751059337-ea72d4f73fcf?q=80&w=2322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515594515116-863345d8507c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517953377824-516f2dca803b?q=80&w=2378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
          <img src={images[index]} alt={`Gallery item ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

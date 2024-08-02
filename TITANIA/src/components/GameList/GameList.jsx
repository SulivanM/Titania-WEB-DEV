// src/components/GameList/GameList.js
import { useState } from 'react';
import gamesData from "../../data/gamesData";
import './GameList.scss';

const GameList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredGames = selectedCategory === 'All' 
    ? gamesData 
    : gamesData.filter(game => game.category === selectedCategory);

  return (
    <div className="gameList">
      <div className="filter">
        <label htmlFor="category">Filtrer par catégorie : </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Toutes</option>
          <option value="Survival">Survie</option>          
          <option value="Battle">Combat</option>         
          
        </select>
      </div>
      <div className="games">
        {filteredGames.map(game => (
          <div key={game.id} className="game">
            <img src={game.image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>{game.description}</p>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;

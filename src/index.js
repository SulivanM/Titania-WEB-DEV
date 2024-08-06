// Importation des styles globaux (si tu en as)
import './index.css';

// Importation des modules nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Création de l'élément racine et rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
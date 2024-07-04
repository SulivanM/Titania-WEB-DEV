

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.jsx';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './style.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar/>
      <Router/>
      <Footer/>
      
    </BrowserRouter>
  </React.StrictMode>
);

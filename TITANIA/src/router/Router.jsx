import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import DelaySuspense from  '../services/DelaySuspense'

const Home = lazy(() => import('../pages/Home/Home'));
// Importez d'autres pages ici de manière dynamique
const Router = () => {
  return (
    <DelaySuspense delay={1000} fallback={<LoadingSpinner />}>
    <Routes>  

      <Route path="/" element={<Home />} />
      {/* Ajoutez des futures routes ici */}
    </Routes>
    </DelaySuspense>
  );
};

export default Router;
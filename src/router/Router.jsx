import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import DelaySuspense from  '../services/DelaySuspense'
import Actu from '../pages/Actu/Actu';
import Gaming from '../pages/Gaming/Gaming';


const Home = lazy(() => import('../pages/Home/Home'));

const Router = () => {
  return (
    <DelaySuspense delay={1000} fallback={<LoadingSpinner />}>
    <Routes>  

      <Route path="/" element={<Home />} />
      <Route path="/actu" element={<Actu />} />
      <Route path="/gaming" element={<Gaming />} />
      {/* Ajoutez des futures routes ici */}
    </Routes>
    </DelaySuspense>
  );
};

export default Router;
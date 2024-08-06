import './LoadingSpinner.scss'

const LoadingSpinner = () => (
  
  <div className="loading-container">
    <div className="rings">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
    </div>
    <p className="loading-text">Chargement en cours...</p>
  </div>
);

export default LoadingSpinner;
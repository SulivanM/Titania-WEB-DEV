import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.scss';

const VideoPlayer = ({ src, controls = true, autoplay = false, loop = false, width = '100%', height = 'auto' }) => {
  const [isVideoVisible, setVideoVisible] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Réinitialiser la position de lecture au début de la vidéo
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleButtonClick = () => {
    setVideoVisible(true);
    // Si autoplay est activé, la vidéo démarrera automatiquement ici
  };

  return (
    <div className="video-player">
      {isVideoVisible && (
        <video
          ref={videoRef}
          src={src}
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          width={width}
          height={height}
          onEnded={handleVideoEnded}
          className="video"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {!isVideoVisible && (
        <button onClick={handleButtonClick} className="play-button">
          <i className="fa-solid fa-play"></i>
        </button>
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default VideoPlayer;

import './Home.scss';
import Carousel from '../../components/Carousel/Carousel';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Ark from '../../assets/titania_ark.webp';
import Bob from '../../assets/titania_BOB.webp';
import Dod from '../../assets/titania_DOD.webp';
import Farm from '../../assets/titania_farming.webp';
import Gmod from '../../assets/Titania_GMOD_V2.webp';
import Path from '../../assets/titania_path.webp';
import Isle from '../../assets/titania_the_isle.webp';
import sampleVideo from '../../assets/sampleVideo/Titania-Outro-V1.mp4';

const images = [
  { src: Ark, link: 'https://example.com/ark' },
  { src: Bob, link: 'https://example.com/bob' },
  { src: Dod, link: 'https://example.com/dod' },
  { src: Farm, link: 'https://example.com/farm' },
  { src: Gmod, link: 'https://example.com/gmod' },
  { src: Path, link: 'https://example.com/path' },
  { src: Isle, link: 'https://example.com/isle' }
];

const Home = () => {
  return (
    <div className='main'>
      <VideoPlayer src={sampleVideo} controls autoplay/>    
      <h1>Nos Jeux & Serveurs</h1>
      <p>Titania est partout ! Ordinateur, tablette, console ou téléphone.</p>
      <Carousel images={images} />      
    </div>
  );
};

export default Home;

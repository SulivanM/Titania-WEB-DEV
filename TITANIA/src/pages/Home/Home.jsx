import './Home.scss';
import Ark from '../../assets/titania_ark.webp';
import Bob from '../../assets/titania_BOB.webp';
import Dod from '../../assets/titania_DOD.webp';
import Farm from '../../assets/titania_farming.webp';
import Gmod from '../../assets/Titania_GMOD_V2.webp';
import Path from '../../assets/titania_path.webp';
import Isle from '../../assets/titania_the_isle.webp';
import Carrousel from '../../components/Carousel/Carousel';

const images = [Ark, Bob, Dod, Farm, Gmod, Path, Isle];

const Home = () => {
  return (
    <div className='main'>
      <h1>Nos Jeux & Serveurs</h1>
      <p>Titania est partout ! Ordinateur, tablette, console ou téléphone.</p>
      <Carrousel images={images} />
    </div>
  );
};

export default Home;

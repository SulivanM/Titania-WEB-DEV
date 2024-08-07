
import Carousel from '../../components/Carousel/Carousel';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import GameList from '../../components/GameList/GameList';
// images des serveurs
import Ark from '../../assets/titania_ark.webp';
import Bob from '../../assets/titania_BOB.webp';
import Dod from '../../assets/titania_DOD.webp';
import Farm from '../../assets/titania_farming.webp';
import Gmod from '../../assets/Titania_GMOD_V2.webp';
import Path from '../../assets/titania_path.webp';
import Isle from '../../assets/titania_the_isle.webp';
// images partenaires
import BalorAlpha from '../../assets/balorAlpha.jpg';
import Bloodmoonlady from '../../assets/Bloodmoonlady.webp';
import sampleVideo from '../../assets/sampleVideo/Titania-Outro-V1.mp4';
import DidounJah from '../../assets/Didoun Jah.webp'; 
import './Home.scss';

const images = [
  { src: Ark, link: 'https://example.com/ark' },
  { src: Bob, link: 'https://example.com/bob' },
  { src: Dod, link: 'https://example.com/dod' },
  { src: Farm, link: 'https://example.com/farm' },
  { src: Gmod, link: 'https://example.com/gmod' },
  { src: Path, link: 'https://example.com/path' },
  { src: Isle, link: 'https://example.com/isle' },
];

const partenaires =[
  { src: BalorAlpha, link: 'https://pclmentc.github.io/Projet_12_clement_colas_pierre/' },
  { src: Bloodmoonlady, link: 'https://www.instagram.com/p/C1RtoBnt5FM/?next=%2F&img_index=1' },
  { src: DidounJah, link: 'https://www.twitch.tv/didounjah' },    
];

const Home = () => {
  return (
    <div className="mainHome">
      <VideoPlayer src={sampleVideo} controls autoplay />
      <section className="texte">
        <h1>Nos serveurs</h1>
        <p>
          Bienvenue dans une communauté multigaming qui se nomme TITANIA.
          <br />
          Nous avons créé cette association afin de rassembler tous les joueurs
          francophones.<br />
          Investissez-vous au sein de notre communauté et accumulez des points à
          dépenser dans la boutique TITANIA !<br />
          Participez aux différents événements, faites des rencontres, et
          construisez votre légende à travers nos nombreux serveurs.
        </p>
      </section>
      <Carousel images={images} />
      <section className="texte">
        <h2>Nos Jeux</h2>
        <p>Titania est disponible sur toutes les plateformes.</p>
      </section>
      <GameList />
      <h2>Nos partenaires</h2>
      <Carousel images={partenaires} inline />
    </div>
  );
};

export default Home;

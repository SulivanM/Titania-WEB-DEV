import './Home.scss';
import Ark from '../../assets/titania_ark.jpg';
import Bob from '../../assets/titania_BOB.jpg';
import Dod from '../../assets/titania_DOD.jpg';
import Farm from '../../assets/titania_farming.jpg';
import Gmod from '../../assets/Titania_GMOD_V2.jpg';
import Path from '../../assets/titania_path.jpg';
import Isle from '../../assets/titania_the_isle.jpg';


const Home = () => {
  return (
    <div className='main'>
      <h1>Nos Jeux & Serveurs</h1>
      <p>Titania est partout ! Ordinateur, tablette, console ou téléphone.</p>
      <section id="slideshow">
        <div className="entire-content">
          <div className="content-carrousel">
            <figure className="shadow"><img src={Ark} /></figure>
            <figure className="shadow"><img src={Bob} /></figure>
            <figure className="shadow"><img src={Dod} /></figure>
            <figure className="shadow"><img src={Farm} /></figure>
            <figure className="shadow"><img src={Gmod} /></figure>
            <figure className="shadow"><img src={Path} /></figure>
            <figure className="shadow"><img src={Isle} /></figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
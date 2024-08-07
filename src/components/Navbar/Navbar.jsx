import './Navbar.scss'
import logo from '../../assets/logoTitania(1).gif'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <div className="box">
      <img src={logo} alt="Logo du projet" />
      </div>
      </div>
      <div className="navbar-description">
      
      <ul className="navbar-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/actu">Actualités</a></li>
          <li><a href="/gaming">Gaming</a></li>
          <li><a href="#">Assistance</a></li>
          <li><a href="https://uptime.titania.website/status/cloud" target="_blank" rel="noopener noreferrer">Status</a></li>
        </ul>  
      </div>

      <div className="navbar-menu">
      <i className="fa-solid fa-lock fa-spin-pulse"></i>
      <a href="#">Login</a>  
      </div>
    </nav>
  );
};

export default Navbar;
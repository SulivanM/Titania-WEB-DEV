import './Navbar.scss'
import logo from '../../assets/logoTitania(1).gif'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Logo du projet" />
      </div>
      <div className="navbar-description">
      
      <ul className="navbar-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Assitance</a></li>
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
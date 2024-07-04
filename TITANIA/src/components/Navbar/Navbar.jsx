import './Navbar.scss'
import logo from '../../assets/logoTitania(1).gif'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="/" ><img src={logo} alt="Logo du projet" /></a>
      </div>
      <div className="navbar-description">
      
      <ul className="navbar-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Gaming</a></li>
          <li><a href="#">Assitance/Support</a></li>
        </ul>  
      </div>

      <div className="navbar-menu">
      <a href="#">Login</a>  
      </div>
    </nav>
  );
};

export default Navbar;
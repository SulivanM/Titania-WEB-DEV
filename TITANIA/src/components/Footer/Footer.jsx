import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer">
    <p>&copy; {currentYear} - TITANIA-GAMING. Tous droits réservés.</p>
    </div>
  );
};

export default Footer;
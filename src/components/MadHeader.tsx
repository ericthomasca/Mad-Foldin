import "./MadHeader.css";
import logo from '../assets/images/mad-logo.png'

function MadHeader() {
  return (
    <header className="mad-header">
      <a href="/" className="logo-link">
        <img src={logo} alt="MAD Logo" className="logo-image" />
        <span className="logo-text"> Fold-ins</span>
      </a>
    </header>
  );
}

export default MadHeader;

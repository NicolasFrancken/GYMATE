import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
    setAnimate(!animate);
  };

  const handleLogoClick = () => {
    if (isActive) {
      setIsActive(!isActive);
      setAnimate(!animate);
    }
  };

  const handleLinkClick = () => {
    setIsActive(false);
    setAnimate(!animate);
  };

  return (
    <>
      <header className="Header-container">
        <Link className="Header-logo" to="/" onClick={handleLogoClick}>
          <span>GYM</span>ATE
        </Link>
        <nav className="Header-nav">
          <Link to="/about" className="Header-btn1">
            About Us
          </Link>
          <Link to="/join" className="Header-btn2">
            JOIN
          </Link>
        </nav>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <div className={`bar1 ${animate ? "firstAnimateBar1" : ""}`}></div>
          <div className={`bar2 ${animate ? "firstAnimateBar2" : ""}`}></div>
          <div className={`bar3 ${animate ? "firstAnimateBar3" : ""}`}></div>
        </div>
      </header>
      <nav className={`mobile-nav ${isActive ? "active" : ""}`}>
        <Link to="/about" className="Header-btn1" onClick={handleLinkClick}>
          About Us
        </Link>
        <Link to="/join" className="Header-btn2" onClick={handleLinkClick}>
          JOIN
        </Link>
      </nav>
    </>
  );
}

export default Header;

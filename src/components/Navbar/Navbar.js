import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>
    window.innerWidth <= 960 ? setButton(false) : setButton(true);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Link <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favteam"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FavTeam
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/livescore"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Live Score
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/h2h" className="nav-links" onClick={closeMobileMenu}>
                Head to Head
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

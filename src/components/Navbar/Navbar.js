import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';

import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Golden Goal <i className="fab fa-typo3"></i>
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
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link
                    to="/favteams"
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
                  <Link
                    to="/aboutus"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                {!button && (
                  <Button
                    className="btn-mobile"
                    buttonStyle="btn--primary"
                    onClick={() => loginWithRedirect()}
                  >
                    LOGIN
                  </Button>
                )}
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                {!button && (
                  <Button
                    className="btn-mobile"
                    buttonStyle="btn--primary"
                    onClick={() => logout()}
                  >
                    LOGOUT
                  </Button>
                )}
              </li>
            )}
          </ul>
          {!isAuthenticated && button && (
            <Button
              buttonStyle="btn--outline"
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </Button>
          )}
          {isAuthenticated && button && (
            <Button buttonStyle="btn--outline" onClick={() => logout()}>
              LOGOUT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

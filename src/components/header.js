import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logoImg from '../images/logo-white.svg';

const Header = () => {
  return (
    <section className="header-wrapper">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="col-2">
            <Link to="/" className="brand-logo--header navbar-brand">
              <img src={logoImg} alt="brand logo" />
            </Link>
          </div>
          <div className="col-8" id="main-menu">
            <ul className="navbar-nav justify-content-center text-center">
              <li className="nav-item">
                <Link to="/#listen" className="nav-link">
                  Listen
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#blog" className="nav-link">
                  Read
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="social-share navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;

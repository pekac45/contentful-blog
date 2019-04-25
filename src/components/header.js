import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import logoImg from '../images/logo-white.svg';

const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/" className="brand-logo--header">
              <img src={logoImg} alt="brand logo" />
            </Link>
          </div>
          <div className="col-7">
            <nav id="main-menu" className="text-center">
              <ul>
                <li>
                  <Link to="/#listen">Listen</Link>
                </li>
                <li>
                  <Link to="/#blog">Read</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col">
            <ul className="social-share list-inline">
              <li className="list-inline-item">
                <Link to="/">
                  <span className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <span className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <span className="icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

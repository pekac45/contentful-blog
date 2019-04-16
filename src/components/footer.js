/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import logoImg from '../images/logo.svg';

class Footer extends Component {
  render() {
    return (
      <section className="footer-wrapper pad-50 bg-lightblue style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 widget text-center">
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
              <p className="copyright">
                Created by{' '}
                <a href="https://pekar.space">
                  <b>Michal Pekar</b>
                </a>{' '}
                2019.
                <br />
              </p>
              <p>
                double h logo by AlfredoCreates @{' '}
                <a href="https://flaticondesign.com">flaticondesign.com</a> from the{' '}
                <a href="https://nounproject.com">Noun Project</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

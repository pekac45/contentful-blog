/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import heroImg from '../images/hero.webp';

const Hero = () => {
  return (
    <section className="hero-wrapper pad-50 bg-lightblue style-2">
      <div className="container-fluid">
        <div className="widget text-center hero-content">
          <img src={heroImg} alt="Henrik Salomon faceshot" className="hero-picture" />
          <h1>Henrik Salomon</h1>
          <h3>Future R&B Producer</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;

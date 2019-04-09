import React, { Component } from "react"
import heroImg from "../images/hero.webp"

export class Hero extends Component {
  render() {
    return (
      <section className="hero-wrapper pad-50 bg-lightblue style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 widget text-center">
              <img
                src={heroImg}
                alt="Henrik Salomon faceshot"
                className="hero-picture"
              />
              <h1>Henrik Salomon</h1>
              <p>Future R&B Producer</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero

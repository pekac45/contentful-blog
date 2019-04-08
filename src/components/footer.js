import React, { Component } from "react"
import logoImg from "../images/logo.png"
import { Link } from "gatsby"

export class Footer extends Component {
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
                Copyrights © 2019{" "}
                <a href="https://pekar.space">
                  <b>Michal Pekar</b>
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer

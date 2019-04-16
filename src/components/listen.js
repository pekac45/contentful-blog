/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Listen extends Component {
  render() {
    return (
      <section className="listen-wrapper pad-50 bg-lightblue style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 widget text-center first-row">
              <h2 className="u-mar-med">Listen</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 widget text-center second-row">
              <iframe
                title="Soundcloud Player"
                height="100"
                id="soundcloud"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/261718032&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=false"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Listen;

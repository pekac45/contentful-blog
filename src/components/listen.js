import React from 'react';

const Listen = () => {
  return (
    <section className="listen-wrapper pad-50 bg-lightblue style-2 u-padding-both-medium">
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
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/460277634%3Fsecret_token%3Ds-Xmw8h&color=%23a17f18&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listen;

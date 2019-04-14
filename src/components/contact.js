/* eslint-disable no-alert */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: false
    };
  }

  changeButtonText = buttonText => {
    this.setState({ buttonText });
  };

  buttonClear = async () => {
    await document.getElementById('submit-button').classList.remove('animate');
    await document.getElementById('submit-button').classList.add('animate');
    await this.sleep(500);
    // next line changes state, everything else deals with animation
    await this.changeButtonText(false);
    await this.sleep(1000);
    await document.getElementById('submit-button').classList.remove('animate');
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // helper function for our animation on buttons
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    });

    // This part deals with animation and changing the state = changing button text
    await document.getElementById('submit-button').classList.add('animate');
    await this.sleep(500);
    await this.changeButtonText(true);
    await this.sleep(1000);
    await document.getElementById('submit-button').classList.remove('animate');
  };

  render() {
    const { buttonText } = this.state;
    return (
      <div className="container contacts">
        <h1>Contact</h1>
        <form
          className="contactForm"
          name="contact"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label htmlFor="bot-field">
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field half first">
            <label htmlFor="name">
              NAME:
              <br />
              <input type="text" name="name" id="name" onChange={this.handleChange} required />
            </label>
          </div>
          <div className="field half">
            <label htmlFor="email">
              EMAIL:
              <br />
              <input type="email" name="email" id="email" onChange={this.handleChange} required />
            </label>
          </div>{' '}
          <div className="field">
            <label htmlFor="message">
              MESSAGE:
              <br />
              <textarea
                name="message"
                id="message"
                rows="6"
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value={buttonText ? 'Sent' : 'Send message'}
                className="special"
                id="submit-button"
              />
            </li>
            <li>
              <input type="reset" value="Clear" onClick={this.buttonClear} />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

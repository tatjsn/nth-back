import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <input className="Footer__button" type="button" value="Yes" onClick={this.props.onYes} />
        <input className="Footer__button Footer__button--right" type="button" value="No" onClick={this.props.onNo} />
      </div>
    );
  }
}

export default Footer;

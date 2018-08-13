import React, { Component } from 'react';
import './Header.css';

const SMILE = String.fromCodePoint(0x1F60A);

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__item">
          Score: {this.props.score}
        </div>
        <div className="Header__item Header__item--right">
          {Array.from({ length: this.props.life }, _ => SMILE)}
        </div>
      </div>
    );
  }
}

export default Header;

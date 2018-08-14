import React, { Component } from 'react';
import './Header.css';

const SMILE = String.fromCodePoint(0x1F60A);
const DEAD = String.fromCodePoint(0x1F480);

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__item">
          Score: {this.props.score}
        </div>
        <div className="Header__item Header__item--right">
          {this.props.life > 0 ? Array.from({ length: this.props.life }, _ => SMILE) : DEAD}
        </div>
      </div>
    );
  }
}

export default Header;

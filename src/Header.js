import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__item">
          Score: {this.props.score}
        </div>
        <div className="Header__item Header__item--right">
          Life: {this.props.life}
        </div>
      </div>
    );
  }
}

export default Header;

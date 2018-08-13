import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const INIT = 0;
const RUN = 1;
const GAMEOVER = 3;

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      life: 0,
      depth: 0,
      types: 0,
      array: [],
      now: 0,
      status: INIT,
    };
  }

  handleGo = () => {
    this.setState({
      score: 0,
      life: 3,
      depth: 2,
      types: 3,
      array: [],
      now: 0,
      status: RUN,
    });
  }

  handleYes = () => {
    this.handleYesNo(this.state.array.includes(this.state.now));
  }

  handleNo = () => {
    this.handleYesNo(!this.state.array.includes(this.state.now));
  }

  handleYesNo(isCorrect) {
    if (isCorrect) {
      // good
      this.setState({
        score: this.state.score + 1,
        array: this.makeNewArray(),
        now: this.makeValue(),
      });
    } else if (this.state.life > 1) {
      // damage
      this.setState({
        life: this.state.life - 1,
        array: this.makeNewArray(),
        now: this.makeValue(),
      });
    } else {
      // game over
      this.setState({ status: GAMEOVER });
    }
  }

  makeValue() {
    return Math.floor(Math.random() * this.state.types) + 1;
  }

  makeNewArray() {
    return [...this.state.array, this.state.now].slice(-this.state.depth);
  }

  render() {
    return (
      <div className="App">
        {((this.state.status === INIT) ||
          (this.state.status === GAMEOVER)) ?
          (<div className="App__main" onClick={this.handleGo}>
            {this.state.status === INIT ? "Go!" : "Game Over. Try Again?"}
          </div>) :
          (<div>
            <Header score={this.state.score} life={this.state.life} />
            <div className="App__main">
              {this.state.now}
            </div>
            <Footer onYes={this.handleYes} onNo={this.handleNo} />
          </div>)
        }
      </div>
    );
  }
}

export default App;

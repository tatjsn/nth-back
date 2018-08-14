import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const STATUS_INIT = 0;
const STATUS_WAITINPUT = 1;
const STATUS_PAUSE = 2;
const STATUS_GAMEOVER = 3;
const GOOD = String.fromCodePoint(0x1F646);
const BAD = String.fromCodePoint(0x1F645);

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
      status: STATUS_INIT,
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
      wasCorrect: true,
      status: STATUS_WAITINPUT,
    });
  }

  handleYes = () => {
    this.handleYesNo(this.state.array.includes(this.state.now));
  }

  handleNo = () => {
    this.handleYesNo(!this.state.array.includes(this.state.now));
  }

  handleYesNo(isCorrect) {
    if (this.state.status !== STATUS_WAITINPUT) {
      // do not accept
      return;
    }

    if (isCorrect) {
      // good
      this.setState({
        score: this.state.score + 1,
        array: this.makeNewArray(),
        now: this.makeValue(),
        wasCorrect: true,
        status: STATUS_PAUSE,
      });
      setTimeout(() => {
        this.setState({ status: STATUS_WAITINPUT });
      }, 300);
      return;
    }
    // bad
    this.setState({
      life: this.state.life - 1,
      array: this.makeNewArray(),
      now: this.makeValue(),
      wasCorrect: false,
      status: STATUS_PAUSE,
    });
    if (this.state.life > 1) {
      setTimeout(() => {
        this.setState({ status: STATUS_WAITINPUT });
      }, 500);
    } else {
      setTimeout(() => {
        this.setState({ status: STATUS_GAMEOVER });
      }, 3000); // wait a bit longer
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
        {((this.state.status === STATUS_INIT) ||
          (this.state.status === STATUS_GAMEOVER)) ?
          (<div className="App__main" onClick={this.handleGo}>
            {this.state.status === STATUS_INIT ? "Ready?" : "Game Over. Try Again?"}
          </div>) :
          (<div>
            <Header score={this.state.score} life={this.state.life} />
            <div className="App__main">
              {this.state.status === STATUS_WAITINPUT ? this.state.now :
                (this.state.wasCorrect ? GOOD : BAD)}
            </div>
            <Footer onYes={this.handleYes} onNo={this.handleNo} />
          </div>)
        }
      </div>
    );
  }
}

export default App;

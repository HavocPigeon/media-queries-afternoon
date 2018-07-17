import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAnimating: false,
      showMenu: false,
    };
  }
  render() {
    const { isAnimating } = this.state;
    const { showMenu } = this.state;
    return (
      <div className="app">
      <nav>
      <div className="brand small">My Site</div>
      <div className="menu small">
      <button onClick={() => this.setState({showMenu: !showMenu})}>Menu</button></div>
      
      <div className="brand large">My Site</div>
      <div className="menu large">About Projects Contact</div>
      </nav>
      <div className={showMenu ? "drawer open" : "drawer"}>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
      </div>
      <div className="animations">
      <div className="square my-animation">My text</div>
      <div>
        <div className={isAnimating ? "square my-animation" : "square"}>
        <button onClick={() => this.setState({ isAnimating: !isAnimating})}>Animate!</button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;

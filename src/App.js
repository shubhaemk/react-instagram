import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Home></Home>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import HomeComponent from './components/home/homeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mb-5">
          <NavBar></NavBar>
        </div>
        <div>
            <HomeComponent></HomeComponent>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NavBar from './components/navbar/navbar';
import HomeComponent from './components/home/homeComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login : false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (login) => {
    this.setState(
      {login : login}
    )
  }
  render() {
      return (
        <div className="App">
          <div className="mb-5">
            <NavBar></NavBar>
          </div>
          <div>
              <HomeComponent handleLogin={this.handleLogin} login={this.state.login}></HomeComponent>
          </div>
        </div>
      );
  }
}

export default App;

import React, {Component} from 'react';
import Feed from './feed';
import axios from 'axios';


class HomeComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : null,
      password : null,
      max_id : null,
      hmp : null
    };

  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://127.0.0.1:2000/login',{'username':this.state.username,'password':this.state.password}).then((response) => {
      if(response.data.login){
        this.props.handleLogin(response.data.login);
      }
    })
  }

  

  render(){
    if (!this.props.login){
      return(
        <div className="container ml-5">
          <div className="row">
            <div className="col mt-1">
              <img src="https://media.giphy.com/media/3o7bu7wtT19WfBAt0Y/giphy.gif" className="float-right" height="300" width="300"></img>
            </div>
            <div className="col mt-5">
              <form className="media-body mt-0" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label>Email address or Username</label>
                  <input name="username" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Email or Username" onChange={this.handleChange}/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input name="password" type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label">I agree to <a href="#">Terms and Conditions</a></label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div className="container ml-5">
          <Feed></Feed>
        </div>
      )
    }
  }
}
export default HomeComponent;

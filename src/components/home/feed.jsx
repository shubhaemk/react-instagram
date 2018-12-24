import React, {Component} from 'react';
import axios from 'axios';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      max_id : null,
      hmp : null
    };
  }

  handleFeed = () => {
      axios.put('http://127.0.0.1:2000/userfeed',{'max_id':this.state.max_id}).then((response) => {
        if(response.data.hmp){
          this.setState({
            max_id : response.data.max_id,
            hmp : response.data.hmp
          })
          console.log(response.data.feed);
        }
      })
  }

  render(){
    return(
      <div>
        {this.handleFeed()}
      </div>
    );
  }
}

export default Feed;

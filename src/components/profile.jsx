import React from 'react';
import {Link} from 'react-router-dom';
import {getCookie} from '../util/cookie';
import Logout from './logout';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { currentUser: getCookie('currentUser') }
  }
  handleLogout(){
    this.setState( {currentUser: getCookie('currentUser')} );
  }
  render(){
      let currentUser = this.state.currentUser;
      if (currentUser == null){
      return(
        <div>
          <h3>
            Login to continue!
          </h3>
          <Link to = "/welcome"> Login</Link>
        </div>
        );
       } else {
        let currentUserObj = JSON.parse(currentUser);
        return (
          <div>
          Welcome {currentUserObj["name"]}!
          <Logout handleLogout={this.handleLogout}/>
          </div>);
      }
  }
}
export default Profile;

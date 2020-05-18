import React from 'react';
import{eraseCookie} from '../util/cookie';
class Logout extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    eraseCookie('jwt');
    eraseCookie('currentUser');
    this.props.handleLogout();
  }

  render(){
    return(
      <a href="#" onClick={this.handleClick}> Logout </a>
    )
  }
}

export default Logout;

import * as APIUtil from '../util/session_api_util';
import React from 'react';
import Profile from './profile';
import {setCookie,getCookie} from '../util/cookie';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { email: '',password: '', showProfile: false};
    this.setCookieAndCurrentUser = this.setCookieAndCurrentUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  setCookieAndCurrentUser(data){
    setCookie('token',data['jwt'],1);
    let currentUser = JSON.stringify(data['user']);
    setCookie('currentUser',currentUser,1);
    this.setState({showProfile:true});
  }

  handleSubmit(event){
    event.preventDefault();
    APIUtil.login({email:this.state.email,password:this.state.password})
    .then(
      (user)=>(this.setCookieAndCurrentUser(user)),
      (err) => ( console.log(err.responseJSON[0])
    ));
  }

  handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
  }
  render(){

    let currentUser = getCookie('currentUser');
    console.log(currentUser);
    if (currentUser){
      return <Profile user = {currentUser}/>
    }
      return(
        <form onSubmit={this.handleSubmit}>
          <h1> Login </h1>
          <label>
          Email :
          <input name="email" type="text" value={ this.state.email }
          onChange={this.handleInputChange}/>
          </label>
          <label>
          Password :
          <input name="password" type="password" value={ this.state.password }
          onChange={this.handleInputChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
  }
}

export default Login;

import * as APIUtil from '../util/session_api_util';
import React from 'react';
import Profile from './profile';
import {Redirect} from 'react-router-dom';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = { email: '',password: '', showProfile: false, user:null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    APIUtil.login({email:this.state.email,password:this.state.password})
    .then(
      (user)=>(this.setState({ showProfile:true, user:user })),
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
    var new_user = this.state.user;
    if (this.state.showProfile){
      return <Redirect to={{
              pathname: "/profile",
              state: { user: this.state.user.user}
            }}/>
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

import * as APIUtil from '../util/session_api_util';
import React from 'react';
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {email: '',password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    APIUtil.login({email:this.state.email,password:this.state.password})
    .then((user)=>(console.log(user.user,user.jwt)),(err) => (console.log(err.responseJSON[0])));
  }

  handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
// equivalent to
// var partialState = {};
// partialState[name] = value;
// this.setState(partialState);
  this.setState({
    [name]: value
  });
  }
  render(){
      return(
        <form onSubmit={this.handleSubmit}>
        <h1> Login </h1>
        <label>
        Email :
        <input name="email" type="text" value={this.state.email}
        onChange={this.handleInputChange}/>
        </label>
        <label>
        Password :
        <input name="password" type="password" value={this.state.password}
        onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
      );
  }
}

export default Login;

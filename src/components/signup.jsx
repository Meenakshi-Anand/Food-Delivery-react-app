import React from 'react';
import AddressForm from './address';
import Login from './login';
import * as APIUtil from '../util/session_api_util';
import {setCookie,getCookie} from '../util/cookie';

class SignUpForm extends React.Component{
  constructor(props){
    super(props);

    this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
    this.handleEntityTypeInputChange = this.handleEntityTypeInputChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      name: '',
      contact_no: '',
      entity_type: 'Consumer',
      address:{
        line1: '',
        line2: '',
        city: '',
        state: '',
        country: 'USA',
        zipcode: ''
      },
      showProfile: false,
      user: null
    };
  }

  handleAddressInputChange(address){
    this.setState({address: address});
  }

  handleEntityTypeInputChange(e){
    let target = e.target;
    let value = target.value;
    this.setState({
      entity_type: value
    });
  }

  handleInputChange(e){
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name] : value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let userDetails = this.state;
    APIUtil.signUp({
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
      contact_no: userDetails.contact_no,
      entity_type: userDetails.entity_type,
      line1: userDetails.address.line1,
      line2: userDetails.address.line2,
      city: userDetails.address.city,
      state: userDetails.address.state,
      country: userDetails.address.country,
      zipcode: userDetails.address.zipcode
    })
    .then(
      (user)=>(this.setState({showProfile:true,user:user})),
      (err) => ( console.log(err.responseJSON[0])
    ));
  }

  render(){
    let currentUser = getCookie('currentUser');
    if (this.state.showProfile){
      return <Login email = {this.state.email} password={this.state.password}/>
    }
    return(
      <form>
      <h1> Sign Up </h1>

      <label>
        Name:
        <input name = "name"
               type = "text"
               value = {this.state.name}
               onChange = {this.handleInputChange}
        />
      </label>

      <label>
        Email:
        <input name = "email"
               type = "text"
               value= {this.state.email}
               onChange = {this.handleInputChange}
        />
      </label>

      <label>
        Password:
        <input name = "password"
               type = "password"
               value= {this.state.password}
               onChange = {this.handleInputChange}
        />
      </label>

      <label>
        Contact Number:
        <input name = "contact_no"
                type = "text"
                value= {this.state.contact_no}
                onChange = {this.handleInputChange}
        />
      </label>

      <label>
        Entity Type:
        <label>
          <input type="radio"
                 name="restaurant-entity"
                 value={"Restaurant"}
                 checked = {this.state.entity_type === "Restaurant"}
                 onChange = {this.handleEntityTypeInputChange}
          />
          Restaurant
        </label>

        <label>
          <input type="radio"
                 name="consumer-entity"
                 value={"Consumer"}
                 checked = {this.state.entity_type === "Consumer"}
                 onChange = {this.handleEntityTypeInputChange}
          />
          Consumer
        </label>
     </label>

     <AddressForm address = {this.state.address}
                  handleAddressInputChange={this.handleAddressInputChange}/>

     <label>
     <input type="submit"
            value="Submit"
            onClick={this.handleSubmit}
      />
     </label>
     </form>
    );
  }
}

export default SignUpForm;

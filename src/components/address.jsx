import React from 'react';
import {statesInUSA} from '../util/statesInUSA';

class AddressForm extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(e){
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let address = this.props.address
    address[name] = value
    console.log(address,"address");
    this.props.handleAddressInputChange(address);
  }
  render(){

    return(
      <label>
      Address :
        <label>
          Line 1:
          <input name = "line1"
                 type = "text"
                 value = {this.props.address.line1}
                 onChange= {this.handleChange}
          />
        </label>

        <label>
          Line 2:
          <input name = "line2"
                 type = "text"
                 value = {this.props.address.line2}
                 onChange= {this.handleChange}
          />
        </label>

        <label>
          City:
          <input name = "city"
                 type = "text"
                 value = {this.props.address.city}
                 onChange= {this.handleChange}
          />
        </label>

        <label>
          State:
          <select name = "state"
                  value = {this.props.address.state}
                  onChange= {this.handleChange} >
            <option value=""></option>
            { statesInUSA.map(stateUsa => (
               <option key={stateUsa} value={stateUsa}> {stateUsa} </option>
              ))
            }
          </select>
        </label>

        <label>
          Zipcode:
          <input name = "zipcode"
                 type = "text"
                 value = {this.props.address.zipcode}
                 onChange= {this.handleChange} />
        </label>

      </label>
    );
  }
}

export default AddressForm;

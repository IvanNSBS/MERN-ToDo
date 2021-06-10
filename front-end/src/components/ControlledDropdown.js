import React from "react";

class ControlledDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Physical", multiple: props.multiple };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Damage Type: ' + this.state.value);
        event.preventDefault();
    }

    render() 
    {
        return(      
        <form onSubmit={this.handleSubmit}>
            <label>
              Damage Type:
              <select multiple={this.state.multiple} value={this.state.value} onChange={this.handleChange}> 
                <option value="Physical">Physical</option>
                <option value="Ice">Ice</option>
                <option value="Fire">Fire</option>
                <option value="Holy">Holy</option>
              </select>
            </label>
            <input type="submit" value="Send" />
          </form>
        )
    }
}

export default ControlledDropdown;

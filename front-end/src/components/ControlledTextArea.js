import React from "react";

class ControlledTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Escreva Algo" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() 
    {
        return( 
        <textarea value={this.state.value} onChange={this.handleChange}></textarea>)
    }
}

export default ControlledTextArea;

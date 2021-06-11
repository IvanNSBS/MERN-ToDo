import React from "react";
import "../styles/style.css"

class TaskCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "", placeHolder: "Add New Task"}
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() 
    {
        return( 
            <div className="task-creator-container">
                <input id="creator-input-field" placeHolder={this.state.placeHolder} value={this.state.value} onChange={this.handleChange}></input> 
                <button id="creator-submit-btn">ADD</button>
            </div>
        )
    }
}

export default TaskCreator;
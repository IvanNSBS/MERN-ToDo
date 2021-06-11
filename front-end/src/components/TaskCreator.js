import React from "react";

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
            <div>
                <input placeHolder={this.state.placeHolder} value={this.state.value} onChange={this.handleChange}></input> 
                <button>CRIAR</button>
            </div>
        )
    }
}

export default TaskCreator;
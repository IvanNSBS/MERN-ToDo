import React from "react";
import "../styles/style.css"

class TaskCreator extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: "", placeHolder: "Add New Task"}
        this.handleChange = this.handleChange.bind(this);
        this.submitNewTask = this.submitNewTask.bind(this);
    }

    handleChange(event){
        this.setState( { value: event.target.value } );
    }

    submitNewTask(){
        if(this.state.value === "" || this.state.value === null || this.state.value === undefined){
            console.log("Value is null, cant submit task :(")
            return;
        }

        this.props.addTodo( {description: this.state.value, finished: false} );
        this.setState({ value: "" })
    }

    render() 
    {
        return( 
            <div className="task-creator-container">
                <TaskInputHandler ph={this.state.placeHolder} value={this.state.value} onInputChanged={this.handleChange}/>
                <button id="creator-submit-btn" onClick={this.submitNewTask}>ADD</button>
            </div>
        )
    }
}

class TaskInputHandler extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onInputChanged(event)
    }

    render(){
        return <input id="creator-input-field" placeHolder={this.props.ph} value={this.props.value} onChange={this.handleChange}></input>
    }
}

export default TaskCreator;
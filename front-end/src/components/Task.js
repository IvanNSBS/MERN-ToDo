import React from "react";
import "../styles/style.css"
import { BsTrashFill } from "react-icons/bs"

class Task extends React.Component{
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
            <div className="task-container">
                <div className="task-checkbox-container">
                    <input type="checkbox" className="task-checkbox"></input>
                    <span className="task">{this.state.placeHolder}</span> 
                </div>
                <button className="delete-task">
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        )
    }
}

export default Task;
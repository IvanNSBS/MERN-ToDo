import React from "react";
import "../styles/style.css"
import { BsTrashFill } from "react-icons/bs"

class Task extends React.Component{
    constructor(props){
        super(props);
        this.state = { finished: false }
        this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
    }

    onCheckboxToggle(event){
        console.log()
        this.setState({ finished: event.target.checked });
    }

    render() 
    {
        return( 
            <div className="task-container">
                <div className="task-checkbox-container">
                    <input type="checkbox" className="task-checkbox" onClick={this.onCheckboxToggle}></input>
                    <span className={`task ${this.state.finished ? "finished-task" : ""}`}> Add New Task</span> 
                </div>
                <button className="delete-task">
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        )
    }
}

export default Task;
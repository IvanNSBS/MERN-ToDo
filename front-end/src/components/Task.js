import React from "react";
import "../styles/style.css"
import { BsTrashFill } from "react-icons/bs"

class Task extends React.Component{
    constructor(props){
        super(props);

        this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.index = this.props.index;
    }

    onCheckboxToggle(event){
        const newObj = {description: this.props.description, finished: event.target.checked}
        this.props.onTaskUpdated( newObj, this.index );
    }

    onClickDelete(event){
        this.props.onTaskDeleted(this.index);
    }

    render() 
    {
        return( 
            <div className="task-container">
                <div className="task-checkbox-container">
                    <input type="checkbox" className="task-checkbox" onClick={this.onCheckboxToggle}></input>
                    <span className={`task ${this.props.finished ? "finished-task" : ""}`}>{this.props.description}</span> 
                </div>
                <button className="delete-task" onClick={this.onClickDelete}>
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        )
    }
}

export default Task;
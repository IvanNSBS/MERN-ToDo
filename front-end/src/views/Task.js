import React from "react";
import "../styles/style.css"
import { BsTrashFill } from "react-icons/bs"

class Task extends React.Component{
    constructor(props){
        super(props);

        this.state = { isMouveOver: false }

        this.onCheckboxToggle = this.onCheckboxToggle.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onCheckboxToggle(event){
        this.props.onTaskUpdated( this.props.index );
    }

    onClickDelete(event){
        this.props.onTaskDeleted(this.props.index);
    }

    onMouseEnter(event) {
        this.setState( { isMouveOver: true } ); 
    }

    onMouseLeave(event) {
        this.setState( { isMouveOver: false } ); 
    }

    render() 
    {
        let deleteBtnClass = this.state.isMouveOver ? "delete-task" : "invisible";
        return( 
            <div className="task-container" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="task-checkbox-container">
                    <input type="checkbox" className="task-checkbox" onClick={this.onCheckboxToggle}></input>
                    <span className={`task ${this.props.finished ? "finished-task" : ""}`}>{this.props.description}</span> 
                </div>
                <button className={ deleteBtnClass } onClick={this.onClickDelete}>
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        )
    }
}

export default Task;
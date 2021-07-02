import "../styles/style.css"
import { ControllerContext, ACTIONS } from "./TodoView";
import React, { useState, useRef, useContext } from "react";

/**
 * 
 * @param {Function} submitTask - Function that adds a task, given a string
 */
function TaskCreator()
{
    const [description, setDescription] = useState("")
    const inputRef = useRef();
    const controllerDispatcher = useContext(ControllerContext);

    function onDescriptionChange(event){ setDescription(event.target.value) }
    function addTask(e){
        e.preventDefault();
        
        if(description === "")
            return;

        controllerDispatcher( { type: ACTIONS.CREATE, payload: { description }} );
        setDescription("")

        inputRef.current.focus();
    }

    return( 
        <form onSubmit={addTask} className="task-creator-container">
            <input ref={inputRef} id="creator-input-field" placeholder="Add a new task..." value={description} onChange={onDescriptionChange}/>
            <button id="creator-submit-btn" onClick={addTask}>ADD</button>
        </form>
    )
}

export default TaskCreator;
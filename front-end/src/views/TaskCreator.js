import React, { useState, useRef } from "react";
import "../styles/style.css"

/**
 * 
 * @param {Function} submitTask - Function that adds a task, given a string
 */
function TaskCreator( { submitTask } ){
    const [description, setDescription] = useState("")
    const inputRef = useRef();

    function onDescriptionChange(event){ setDescription(event.target.value) }
    function addTask(e){
        e.preventDefault();
        
        if(description === "")
            return;

        submitTask( description );
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
import React, { useState } from "react";
import "../styles/style.css"

/**
 * 
 * @param {Function} submitTask - Function that adds a task, given a string
 */
function TaskCreator( { submitTask } ){
    const [description, setDescription] = useState("")

    function onDescriptionChange(event){ setDescription(event.target.value) }
    function addTask(e){
        e.preventDefault();
        
        if(description === "")
            return;

        submitTask( description );
        setDescription("")
    }

    return( 
        <form onSubmit={addTask} className="task-creator-container">
            <input id="creator-input-field" placeholder="Add a new task..." value={description} onChange={onDescriptionChange}/>
            <button id="creator-submit-btn" onClick={addTask}>ADD</button>
        </form>
    )
}

export default TaskCreator;
import React from "react";
import Task from "./Task";
import "../styles/style.css"

class TaskList extends React.Component {
    render() 
    {
        return( 
            <div id="task-list-container">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        )
    }
}

export default TaskList;
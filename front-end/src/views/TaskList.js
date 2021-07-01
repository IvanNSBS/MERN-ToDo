import React from "react";
import Task from "./Task";
import "../styles/style.css"

/**
 * @param {todoModel} todoItems - todoModel object 
 * @param {Function} toggleTodo - Toggles the completion state of a todo, given it's index 
 * @param {Function} deleteTodo - Toggles the completion state of a todo, given it's index 
 */
function TaskList( { todoItems } )
{

    const taskItems = todoItems.map((todoObject, index) => 
        <Task 
            key = {index}
            description = { todoObject.description } 
            finished = { todoObject.completed } 
            index = { index }>
        </Task>
    );

    return( 
        <div id="task-list-container">
            {taskItems}
        </div>
    )
}

export default TaskList;
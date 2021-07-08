import "../styles/style.css"
import React from "react";
import { DateView } from "./DateView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

export const ControllerContext = React.createContext();
export const ACTIONS = { CREATE: 'create', UPDATE_COMPLETED: 'update-completed', UPDATE_DESCRIPTION: 'update-description', DELETE: 'delete'}

/**
 * @param {todoController} todoController - todoController object 
 */
function TodoView( { controllerDispatcher, todos } )
{
    return ( 
        <ControllerContext.Provider value = {controllerDispatcher}>
            <div id="todo-container">
                <DateView />
                <TaskCreator/>
                <TaskList todoItems={todos}/>
            </div>
        </ControllerContext.Provider>
    )
}

export default TodoView;

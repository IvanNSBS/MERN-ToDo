import "../styles/style.css"
import React, { useState } from "react";
import { DateView } from "./DateView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

export const ControllerContext = React.createContext();
export const ACTIONS = { CREATE: 'create', UPDATE_COMPLETED: 'update-completed', UPDATE_DESCRIPTION: 'update-description', DELETE: 'delete'}

function useTodoController(todoController)
{
    const [todos, setTodos] = useState(todoController.requestAllTodos());
    
    function dispatcher(action) 
    {
        switch (action.type)
        {
            case ACTIONS.CREATE:
                return setTodos(todoController.requestAddTodo(action.payload.description));
            case ACTIONS.UPDATE_COMPLETED:
                return setTodos(todoController.requestUpdateCompleted(action.payload.index, action.payload.value)); 
            case ACTIONS.UPDATE_DESCRIPTION:
                return setTodos(todoController.requestUpdateDescription(action.payload.index, action.payload.value)); 
            case ACTIONS.DELETE:
                return setTodos(todoController.requestRemoveTodo(action.payload.index));
            default:
                return todos;
        }
    }

    return [todos, dispatcher]
}


/**
 * @param {todoController} todoController - todoController object 
 */
function TodoView( { controller } )
{
    const [todos, dispatch] = useTodoController(controller);

    return ( 
        <ControllerContext.Provider value={ dispatch }>
            <div id="todo-container">
                <DateView />
                <TaskCreator/>
                <TaskList todoItems={ todos }/>
            </div>
        </ControllerContext.Provider>
    )
}

export default TodoView;

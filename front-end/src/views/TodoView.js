import "../styles/style.css"
import React, { useState, useContext } from "react";
import { DateView } from "./DateView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

export const ControllerContext = React.createContext();

/**
 * 
 * @param {todoController} controller - todoController object 
 */
function TodoView( { controller } )
{
    const [allTodos, setTodos] = useState( controller.requestAllTodos() )

    function createTodo(descr) { setTodos(controller.requestAddTodo(descr)); }
    function updateTodo(index) { setTodos(controller.requestToggleTodo(index)); }
    function deleteTodo(index) { setTodos(controller.requestRemoveTodo(index)); }

    const contextData = { create: createTodo, update: updateTodo, delete: deleteTodo}

    return ( 
        <ControllerContext.Provider value={contextData}>
            <div id="todo-container">
                <DateView />
                <TaskCreator submitTask = { createTodo }/>
                <TaskList todoItems={ allTodos } toggleTodo={ updateTodo } deleteTodo={ deleteTodo }/>
            </div>
        </ControllerContext.Provider>
    )
}

export default TodoView;

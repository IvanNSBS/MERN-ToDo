import "../styles/style.css"
import React, { useState } from "react";
import { DateView } from "./DateView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

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

    return ( 
        <div id="todo-container">
            <DateView />
            <TaskCreator submitTask = { createTodo }/>
            <TaskList  todoItems={ allTodos } toggleTodo={ updateTodo } deleteTodo={ deleteTodo }/>
        </div>
    )
}

export default TodoView;

import React, { useState, useEffect } from 'react'
import TodoView from "../views/TodoView"
import { todoItem } from '../models/todoModel'
import axios from 'axios'

const ACTIONS = { CREATE: 'create', UPDATE_COMPLETED: 'update-completed', UPDATE_DESCRIPTION: 'update-description', DELETE: 'delete'}

function ReactTodoController()
{
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        updateTodosFromServer();
    }, []);
    
    function updateTodosFromServer(){
        axios.get("http://localhost:4000/todos").then(res => {
            let todos = []
            res.data.forEach(todo => {
                todos.push(new todoItem(todo._id, todo.description, todo.completed))
            });
            setTodoItems(todos)
        });
    }

    function axiosDispatcher(action)
    {
        let request = null;
        let id = null;
        switch (action.type)
        {
            case ACTIONS.CREATE:
                axios.post("http://localhost:4000/todos/add", { description: action.payload.description, completed: false }).then(res => {
                    updateTodosFromServer();
                });
                break;
            case ACTIONS.UPDATE_COMPLETED:
                id = todoItems[action.payload.index].getId();
                request = {completed: action.payload.value};
                axios.post("http://localhost:4000/todos/update_completed/" + id, request ).then(updateTodosFromServer);
                break;
            case ACTIONS.UPDATE_DESCRIPTION:
                id = todoItems[action.payload.index].getId();
                request = {description: action.payload.value};
                axios.post("http://localhost:4000/todos/update_description/" + id, request ).then(updateTodosFromServer);
                break;
            case ACTIONS.DELETE:
                id = todoItems[action.payload.index].getId();
                axios.delete("http://localhost:4000/todos/delete/" + id).then(updateTodosFromServer);
                break;
            default:
                break;
        }
    }

    return <TodoView controllerDispatcher={axiosDispatcher} todos={todoItems}/>;
}

export default ReactTodoController;
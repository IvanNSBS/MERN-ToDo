import React from 'react';
import ReactDOM from 'react-dom';
import TodoView from './views/TodoView';
import { todoModel, todoController } from "./models/todoModel";

let model = new todoModel();
let controller = new todoController(model);
controller.loadTodosFromDatabase();

ReactDOM.render(
  <React.StrictMode>
    <TodoView controller = { controller }/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import TodoView from './views/TodoView';
import { todoModel } from "./models/todoModel";
import { todoController } from "./controllers/todoController";

let model = new todoModel();
// model.fetchTodosFromServer();

let controller = new todoController(model);
controller.loadTodosFromDatabase().then(res => {
    ReactDOM.render(
      <React.StrictMode>
        <TodoView controller = { controller }/>
      </React.StrictMode>,
      document.getElementById('root')
    );
});



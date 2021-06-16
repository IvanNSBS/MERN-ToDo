import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './views/TodoContainer';
import { todoModel } from "./models/todoModel";

let model = new todoModel();

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer model = {model}/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import ReactTodoController from "./controllers/reactController";

// let model = new todoModel();

ReactDOM.render(
  <React.StrictMode>
    <ReactTodoController/>
  </React.StrictMode>,
  document.getElementById('root')
);



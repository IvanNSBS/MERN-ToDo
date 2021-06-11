import React from "react";
import "../styles/style.css"
import CurrentDayView from "./CurrentDayView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

class TodoContainer extends React.Component {
    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <CurrentDayView />
            <TaskCreator/>
            <TaskList/>
        </div>)
    }
}

export default TodoContainer;

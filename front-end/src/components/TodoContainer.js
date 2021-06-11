import React from "react";
import "../styles/style.css"
import CurrentDayView from "./CurrentDayView";
import ControlledTextArea from "./examples/ControlledTextArea";
import ControlledDropdown from "./examples/ControlledDropdown";
import TaskCreator from "./TaskCreator";

class TodoContainer extends React.Component {
    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <div>
                <CurrentDayView />
            </div>
            <div>
                <TaskCreator/>
            </div>
        </div>)
    }
}

export default TodoContainer;

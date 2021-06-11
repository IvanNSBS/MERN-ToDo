import React from "react";
import "../styles/style.css"
import CurrentDayView from "./CurrentDayView";
import ControlledTextArea from "./ControlledTextArea";
import ControlledDropdown from "./ControlledDropdown";

class TodoContainer extends React.Component {
    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <div id="day-view-container">
                <CurrentDayView />
            </div>
        </div>)
    }
}

export default TodoContainer;

import React from "react";
import Task from "./Task";
import "../styles/style.css"

class TaskList extends React.Component {
    constructor(props){
        super(props);

        this.onTaskUpdated = this.onTaskUpdated.bind(this);
    }

    onTaskUpdated(newObj, index){
        this.props.updateTodo(newObj, index);
    }

    render() 
    {
        const taskItems = this.props.todoItems.map((todoObject, index) => 
            <Task onTaskUpdated={this.onTaskUpdated} 
                  description={todoObject.description} 
                  finished={todoObject.finished} index={index}>
            </Task>
        );

        return( 
            <div id="task-list-container">
                {taskItems}
            </div>
        )
    }
}

export default TaskList;
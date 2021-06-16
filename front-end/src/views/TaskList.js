import React from "react";
import Task from "./Task";
import "../styles/style.css"

class TaskList extends React.Component {
    constructor(props){
        super(props);

        this.onTaskUpdated = this.onTaskUpdated.bind(this);
        this.onTaskDeleted = this.onTaskDeleted.bind(this);
    }

    onTaskUpdated(index){
        this.props.toggleTodo(index);
    }

    onTaskDeleted(index){
        this.props.deleteTodo(index);
    }

    render() 
    {
        console.log("Task List...")
        console.log(this.props.todoItems);

        const taskItems = this.props.todoItems.map((todoObject, index) => 
            <Task onTaskUpdated={ this.onTaskUpdated } 
                  onTaskDeleted={ this.onTaskDeleted }
                  description={todoObject.description} 
                  finished={todoObject.completed} 
                  index={index}>
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
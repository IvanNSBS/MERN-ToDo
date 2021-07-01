import React from "react";
import "../styles/style.css"
import { DateView } from "./DateView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

class TodoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoItems: this.props.controller.requestAllTodos() }

        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(todoDescription) {
        const newTodos = this.props.controller.requestAddTodo(todoDescription);

        if(newTodos != null)
            this.setState({ todoItems: newTodos });
        else
            console.log("Error adding todo")
    };

    toggleTodo(objIndex) {
        const newTodos = this.props.controller.requestToggleTodo(objIndex);

        if(newTodos != null)
            this.setState({ todoItems: newTodos });
        else
            console.log("Error toggling todo")
    }

    deleteTodo(objIndex) {
        const newTodos = this.props.controller.requestRemoveTodo(objIndex);

        if(newTodos != null)
            this.setState({ todoItems: newTodos });
        else
            console.log("Error deleting todo")
    }

    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <DateView />
            <TaskCreator submitTask = { this.addTodo }/>
            <TaskList  todoItems={ this.state.todoItems } toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}/>
        </div>)
    }
}

export default TodoView;

import React from "react";
import "../styles/style.css"
import CurrentDayView from "./CurrentDayView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

class TodoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { todoItems: this.props.model.getAllTodos() }

        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(todoDescription) {
        this.props.model.addTodo(todoDescription);
        this.setState({ todoItems: this.props.model.getAllTodos() });
    };

    toggleTodo(objIndex){
        this.props.model.toggleTodo(objIndex);
        this.setState({ todoItems: this.props.model.getAllTodos() });
    }

    deleteTodo(objIndex){
        this.props.model.removeTodo(objIndex);
        this.setState({ todoItems: this.props.model.getAllTodos() });
    }

    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <CurrentDayView />
            <TaskCreator addTodo={ this.addTodo }/>
            <TaskList  todoItems={ this.props.model.getAllTodos() } toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}/>
        </div>)
    }
}

export default TodoContainer;

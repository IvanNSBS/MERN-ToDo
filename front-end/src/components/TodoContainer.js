import React from "react";
import "../styles/style.css"
import CurrentDayView from "./CurrentDayView";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

class TodoContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = { todoItems: this.fetchTodoItems() }

        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    fetchTodoItems(){
        return [{description: "Aoiee", finished: false}, {description: "Aoiee 2222", finished: false}]
    }

    addTodo(todoObject) {
        this.setState( (state, props) =>({
           todoItems: state.todoItems.concat(todoObject)
        }));
    };

    updateTodo(todoObject, objIndex){
        const newTodoItems = Object.assign([...this.state.todoItems], {
            [objIndex]: todoObject
        });
        this.setState({ todoItems: newTodoItems });
    }

    render() 
    {
        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <CurrentDayView />
            <TaskCreator addTodo={this.addTodo}/>
            <TaskList todoItems={this.state.todoItems} updateTodo={this.updateTodo}/>
        </div>)
    }
}

export default TodoContainer;

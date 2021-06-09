import React from "react";
import "../styles/style.css"

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() 
    {
        return( 
        <div id="todo-container">
            Yo g skillet. How u doin, {this.props.name}?
            It is: {this.state.date.toLocaleTimeString()}.
        </div>)
    }
}

export default TodoContainer;

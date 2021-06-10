import React from "react";
import "../styles/style.css"
import ControlledTextArea from "./ControlledTextArea";
import ControlledDropdown from "./ControlledDropdown";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), condition: false };

        this.toggleCondition = this.toggleCondition.bind(this);
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

    toggleCondition() {
        this.setState((state) => ({
            condition: !state.condition
        }));
    }

    render() 
    {
        let conditionalRender;
        if(this.state.condition) conditionalRender = "Marrapaaaais" 
        else conditionalRender = "";

        return( 
        <div id="todo-container" onClick={this.toggleCondition}>
            <ControlledTextArea/>
            <ControlledDropdown/>
            {/* { this.state.condition && <ClockTest date={this.state.date}/>} */}
        </div>)
    }
}

class ClockTest extends React.Component {
    render() 
    {
        return( 
        <div>
            Time: {this.props.date.toLocaleTimeString()}.
        </div>)
    }
}

export default TodoContainer;

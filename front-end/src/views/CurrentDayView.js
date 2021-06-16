import React from "react";
import "../styles/style.css"

class CurrentDayView extends React.Component{
    constructor(props){
        super(props)
        this.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
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

    getMonthAndYearString(){
        let month = this.months[this.state.date.getMonth()];
        let monthDay = this.state.date.getDate();
        let year = this.state.date.getFullYear();
        return `${month} ${monthDay}, ${year}`
    }

    render(){
        return( 
            <div id="current-day-container">
                <span className="left-separator">{"<"}</span>
                <div>
                    <p className="big-font primary-font no-margin-border">{this.weekDays[this.state.date.getDay()]}</p>
                    <p className="secondary-font no-margin-border">{this.getMonthAndYearString()}</p>
                </div>
                <span className="right-separator">{">"}</span>
            </div>
        )
    }
}

export default CurrentDayView;
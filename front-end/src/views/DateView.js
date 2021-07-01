import { useState, useEffect } from "react";
import "../styles/style.css"

function DateView()
{
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]; 
    const [currentDate, setDate] = useState(new Date());
    
    useEffect( () => {
        const timerID = setInterval( () => tick(), 1000 );
        return () => clearInterval(timerID); 
    }, [] );

    function getMonthAndYearString() {
        let month = months[currentDate.getMonth()];
        let monthDay = currentDate.getDate();
        let year = currentDate.getFullYear();
        let seconds = currentDate.toLocaleTimeString();
        return `${month} ${monthDay}, ${year} : ${seconds}`
    }

    function tick() {
        setDate(new Date())
    }

    return( 
        <div id="current-day-container">
            <span className="left-separator">{"<"}</span>
            <div>
                <p className="big-font primary-font no-margin-border">{weekDays[currentDate.getDay()]}</p>
                <p className="secondary-font no-margin-border">{getMonthAndYearString()}</p>
            </div>
            <span className="right-separator">{">"}</span>
        </div>
    )
}

export { DateView };
import React, { Component } from 'react';
import './DateWeather.css';

class DateWeather extends Component {
    render(){
        return(
            <div className="date-weather">
                <h2 className="date">Friday, 15th June 2018</h2>
                <h4 className="weather">Sunny 22C (Moscow)</h4>
            </div>
            
        )
    }
}
export default DateWeather;
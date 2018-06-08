import React, { Component } from 'react';
import './Main.css';
import DateWeather from '../Common/DateWeather.js';
import GroupTable from '../Common/GroupTable.js'
import FixturesToday from '../Common/FixturesToday.js';

class Main extends Component {
    render(){
        return(
            <div className="main">
                <DateWeather />
                <GroupTable />
                <FixturesToday />
            </div>   
        )
    }
}

export default Main;
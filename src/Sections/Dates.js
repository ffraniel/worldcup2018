import React, { Component } from 'react';
import './Dates.css';
import Fixtures from '../Common/Fixture';
import todaysGamesList from '../todaysGamesList.js';

class Dates extends Component {
    constructor(props){
        super(props)
        this.state={
            fixtures:todaysGamesList
        }
    }

    render(){
        return(
            <div className="dates-page">
                <h3 className="dates-page-title">Fixtures</h3>
                <section className="dates-list">
                    {this.state.fixtures.map((game, key)=>{
                        return(
                            <Fixtures game={game} key={key} />
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default Dates;
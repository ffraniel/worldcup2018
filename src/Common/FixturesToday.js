import React, { Component } from 'react';
import './FixturesToday.css';
import Fixture from './Fixture.js';
import todaysGamesList from '../todaysGamesList.js';

class FixturesToday extends Component {
    constructor(props){
        super(props);
        this.state={
            todaysFixtures:[]
        }
    }

    componentDidMount (){
        this.setState({
            todaysFixtures:todaysGamesList
        });
    }
    
    render(){
        return(
            <div className="fixtures-today">
                {this.state.todaysFixtures.map((game, key)=>{
                    return(
                        <Fixture game={game} key={key} />
                    )
                })}
            </div>
        )
    }
}
export default FixturesToday;
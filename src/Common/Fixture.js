import React, { Component } from "react";
import "./Fixture.css";

class Fixture extends Component {
  render() {
    const ko = this.props.game.ko;
    const location = this.props.game.location;

    const teamA = this.props.game.teams[0];
    const nationA = teamA.nation;
    const nationAGoals = teamA.goals.length;
    const nationAGoalsDetails = teamA.goals;
    var nationADetails = nationAGoalsDetails.map(goal => {
      let stringReturn = goal.who + ", " + goal.time.toString();
      if (goal.info) {
        stringReturn = stringReturn + " " + goal.info;
      }
      return stringReturn;
    });

    const teamB = this.props.game.teams[1];
    const nationB = teamB.nation;
    const nationBGoals = teamB.goals.length;
    const nationBGoalsDetails = teamB.goals;
    var nationBDetails = nationAGoalsDetails.map(goal => {
      let stringReturn = goal.who + ", " + goal.time.toString();
      if (goal.info) {
        stringReturn = stringReturn + " " + goal.info;
      }
      return stringReturn;
    });

    return (
      <div className="fixture">
        <p className="ko-fixture">{ko}</p>
        <p className="location">{location}</p>

        <section className="score-box">

          <section className="team-box team-box-left">
            <section>
              <p className="teamName">{nationA}</p>
            </section>
            <section>
              <p>{nationAGoals}</p>
            </section>
            <section className="details">
              {nationADetails &&
                nationADetails.map((goal, key) => {
                  return <p>{goal}</p>;
                })}
            </section>
          </section>

          <section className="vs-completed">
                <p>VS</p>
                <p>Full Time</p>
          </section>

          <section className="team-box team-box-right">
            <section>
              <p className="teamName">{nationB}</p>
            </section>
            <section>
              <p>{nationBGoals}</p>
            </section>
            <section className="details">
              {nationBDetails &&
                nationBDetails.map((goal, key) => {
                  return <p key={key}>{goal}</p>;
                })}
            </section>
          </section>


        </section>
      </div>
    );
  }
}

export default Fixture;
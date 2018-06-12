import React, { Component } from "react";
import "./Knockout.css";

class Knockout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        "Brazil",
        "Germany",
        "Argentina",
        "Australia",
        "Belgium",
        "Colombia",
        "Costa Rica",
        "Croatia",
        "Denmark",
        "Egypt",
        "England",
        "France",
        "Iceland",
        "Iran",
        "Japan",
        "Mexico",
        "Morocco",
        "Nigeria",
        "Panama",
        "Peru",
        "Poland",
        "Portugal",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Tunisia",
        "Uruguay"
      ],
      quallified: [
        "Brazil",
        "Germany",
        "Argentina",
        "Australia",
        "Belgium",
        "Colombia",
        "Costa Rica",
        "Croatia",
        "Denmark",
        "Egypt",
        "England",
        "France",
        "Iceland",
        "Iran",
        "Japan",
        "Mexico"
      ],
      quarterFinalists: [
        "Brazil",
        "Germany",
        "Argentina",
        "Australia",
        "Belgium",
        "Croatia",
        "Denmark",
        "Egypt"
      ]
    };
  }
  render() {
    return (
      <div className="knockout-page">
        <h3 className="knockout-title">Knockout Stages</h3>
        <section className="knockout-display">
          <section className="qualified-teams">
            <h4 className="knockout-titles">Last 16</h4>
            {this.state.quallified.map((team, key) => {
              return (
                <section className="team-box" key={key}>
                  <p className="team-box-name">{team}</p>
                </section>
              );
            })}
          </section>

          <section className="quarter-finalists">
            <h4 className="knockout-titles">Quarter Finals</h4>
            <section className="team-box">
              <p className="team-box-name">Iran</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Russia</p>
            </section>
            <section className="team-box">
              <p className="team-box-name">Tunisia</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Costa Rica</p>
            </section>

            <section className="team-box">
              <p className="team-box-name">Brazil</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Sweden</p>
            </section>
            <section className="team-box">
              <p className="team-box-name">Uruguay</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Panama</p>
            </section>

          </section>

          <section className="semi-finalists">
            <h4 className="knockout-titles">Semi Finals</h4>
            <section className="team-box">
              <p className="team-box-name">Iran</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Costa Rica</p>
            </section>

            <section className="team-box">
              <p className="team-box-name">Brazil</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Panama</p>
            </section>
          </section>
          
          <section className="finalists">
            <h4 className="knockout-titles">Final</h4>
            <section className="team-box">
              <p className="team-box-name">Iran</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Panama</p>
            </section>
          </section>

          <section className="runners-up">
            <h4 className="knockout-titles">Final</h4>
             <section className="team-box">
              <p className="team-box-name">Germany</p>
            </section>
            <section className="team-box" >
              <p className="team-box-name">Portugal</p>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default Knockout;

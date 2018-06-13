import React, { Component } from "react";
import "./Groups.css";
import GroupTable from "../Common/GroupTable.js";
import GroupOverlay from "../Common/GroupOverlay.js";

class Groups extends Component {
  render() {
    return (
      <div className="groups-page">
        <GroupOverlay />
        <h3 className="groups-title">Groups</h3>
        <section className="groups-display">
          <GroupTable />
          <GroupTable />
          <GroupTable />
          <GroupTable />
          <GroupTable />
          <GroupTable />
          <GroupTable />
          <GroupTable />
        </section>
      </div>
    );
  }
}

export default Groups;

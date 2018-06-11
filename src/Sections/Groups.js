import React, { Component } from "react";
import "./Group.css";
import GroupTable from "../Common/GroupTable.js";
import GroupOverlay from "../Common/GroupOverlay.js";

class Groups extends Component {
  render() {
    return (
      <div className="group-page">
        <GroupOverlay />
        <h3 className="group-title">Groups</h3>
        <section className="group-display">
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

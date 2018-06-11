import React, { Component } from "react";
import "./GroupTable.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
import groupData from '../GroupsData/GroupData.js';
import columns from '../GroupsData/Columns.js';

class GroupTable extends Component {
  render() {
    

    return (
      <div className="group-table">
        <h4 className="group-name">Group G</h4>
        <ReactTable  data={groupData} columns={columns} showPagination={false} defaultPageSize={4} />
      </div>
    );
  }
}

export default GroupTable;

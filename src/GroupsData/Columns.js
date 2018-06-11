const columns = [
    {
      Header: "Team",
      accessor: "nation",
      width: 100
    },
    {
      Header: "MP",
      accessor: "matchesPlayed",
      width: 38
    },
    {
      Header: "W",
      accessor: "wins",
      width: 38
    },
    {
      Header: "D",
      accessor: "draws",
      width: 38
    },
    {
      Header: "L",
      accessor: "losses",
      width: 38
    },
    // {
    //   Header: "GF",
    //   accessor: "goalsFor",
    //   width: 38
    // },
    // {
    //   Header: "GA",
    //   accessor: "goalsAgainst",
    //   width: 38
    // },
    {
      Header:"GD", 
      accessor:"goalDifference",
      width:40
    },
    {
      Header: "P",
      accessor: "points",
      width: 38
    }
  ];

  export default columns;
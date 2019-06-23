/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import CSVReader from "react-csv-reader";
import { Table } from "antd";

const columns = [
  {
    title: "ProjectID",
    dataIndex: "ProjectID",
    filters: [
      {
        text: "1",
        value: "1"
      },
      {
        text: "2",
        value: "2"
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "01",
            value: "01"
          },
          {
            text: "02",
            value: "02"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"]
  },
  {
    title: "YearQuarter",
    dataIndex: "YearQuarter",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "ProjectName",
    dataIndex: "ProjectName",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Company",
    dataIndex: "Company",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Country",
    dataIndex: "Country",
    filters: [
      {
        text: "中国",
        value: "中国"
      },
      {
        text: "新加坡",
        value: "新加坡"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Region",
    dataIndex: "Region"
  },
  {
    title: "Province",
    dataIndex: "Province"
  },
  {
    title: "City",
    dataIndex: "City"
  },
  {
    title: "CityTier",
    dataIndex: "CityTier"
  },
  {
    title: "ProjectLevel",
    dataIndex: "ProjectLevel"
  },
  {
    title: "NLA",
    dataIndex: "NLA"
  },
  {
    title: "AreaOpenning",
    dataIndex: "AreaOpenning"
  }
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

function parseData(dataArray) {
  const jsonData = [];
  const columnName = [
    "ProjectID",
    "YearQuarter",
    "ProjectName",
    "Company",
    "Country",
    "Region",
    "Province",
    "City",
    "CityTier",
    "ProjectLevel",
    "NLA",
    "AreaOpenning"
  ];
  dataArray.forEach(function(singleArray, index) {
    const tempJson = { key: index };
    singleArray.forEach(function(item, index_second) {
      tempJson[columnName[index_second]] = item;
    });
    jsonData.push(tempJson);
  });
  return jsonData;
}

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      csvData: []
    };
  }
  // componentDidMount() {
  //     console.log("Component did mount is called")
  //     const data = JSON.parse(localStorage.getItem("csvData"));
  //     if (data) {
  //         data.shift();
  //     }
  //     this.setState({
  //         csvData: data
  //     })
  // }

  handleFile = data => {
    // console.log(data);
    localStorage.setItem("csvData", JSON.stringify(data));
    const localStorageData = JSON.parse(localStorage.getItem("csvData"));
    this.setState({
      csvData: localStorageData
    });
    console.log("after upload", this.state.csvData);
    //console.log("------localStorageData------", localStorageData[0]);
  };

  render() {
    const { csvData } = this.state;
    console.log("state data is", csvData);

    return (
      <div>
        <CSVReader
          cssClass="react-csv-input"
          onFileLoaded={this.handleFile}
          parserOptions={{ header: true }}
        />
        <Table columns={columns} dataSource={csvData} onChange={onChange} />
      </div>
    );
  }
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(Project);

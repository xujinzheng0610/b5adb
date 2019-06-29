import React, { Component } from "react";
import { connect } from "react-redux";
import CSVReader from "react-csv-reader";
import { Table } from "antd";
import { projectColumn } from "../models/projectColumn";
import axios from "axios";

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

  componentDidMount() {
    this.fetchProjectData()
  }

  fetchProjectData = () => {
    axios.get('/project')  
    .then(response => {      
      console.log(response.data)
      this.setState({
        csvData: this.renameID(response.data)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  renameID(json){
    json.forEach( record => {
      record.key = record.id
      delete record.id
    })
    return json;
  }

  checkData( data){
    data = data.filter( record => record.projectID !== "")
    return data
  }

  handleFile = data => {
    data = JSON.parse(JSON.stringify(data))
    data = this.checkData(data)
    axios.post('/project', data)
    .then(function (response) {
      console.log("after submit file", response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.fetchProjectData()
  };

  render() {
    const { csvData } = this.state;
    return (
      <div>
        <CSVReader
          cssClass="react-csv-input"
          onFileLoaded={this.handleFile}
          parserOptions={{ header: true }}
        />
        <Table columns={projectColumn} dataSource={csvData} scroll={{ x: 130 }}/>
      </div>
    );
  }
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(Project);

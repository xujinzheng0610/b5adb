import React, { Component } from "react";
import { connect } from "react-redux";
import CSVReader from "react-csv-reader";
import { Table } from "antd";
import { projectColumn } from "../models/projectColumn";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      csvData: []
    };
  }

  componentDidMount() {
    this.fetchProjectData();
  }

  fetchProjectData = () => {
    axios
      .get("/project")
      .then(response => {
        console.log(response.data);
        this.setState({
          csvData: this.renameID(response.data)
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  renameID(json) {
    json.forEach(record => {
      record.key = record.id;
      delete record.id;
    });
    return json;
  }

  checkData(data) {
    data = data.filter(record => record.projectID !== "");
    return data;
  }

  handleFile = data => {
    data = JSON.parse(JSON.stringify(data));
    data = this.checkData(data);
    axios
      .post("/project", data)
      .then(function(response) {
        console.log("after submit file", response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.fetchProjectData();
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
        <Table columns={projectColumn} dataSource={csvData} scroll={{ x: 130 }} />
      </div>
    );
  }
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(Project);

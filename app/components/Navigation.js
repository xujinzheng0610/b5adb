/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "antd";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menu;
    if (this.props.loggedIn) {
      menu = (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ paddingTop: 10 }}
        >
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
        </Menu>
      );
    } else {
      menu = "";
    }

    return <div>{menu}</div>;
  }
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });

export default connect(mapStateToProps)(Navigation);

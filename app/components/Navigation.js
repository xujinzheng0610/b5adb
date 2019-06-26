import React, { Component } from "react";
import { Menu, Icon } from "antd";
import Link from 'next/link';
import cookie from 'js-cookie';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menu;
    if (cookie.get('token') !== undefined) {
      menu = (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ paddingTop: 10 }}
        >
          <Menu.Item key="1">
            <Link className="nav-text" href='/project'><a>Project</a></Link>
          </Menu.Item>
          <Menu.Item key="2"> 
            <Link className="nav-text" href='/floor'><a>Floor</a></Link>
          </Menu.Item>
        </Menu>
      );
    } else {
      menu = "";
    }

    return <div>{menu}</div>;
  }
}

export default Navigation;

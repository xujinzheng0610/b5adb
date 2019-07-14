import React, { Component } from "react";
import { Menu, Icon } from "antd";
import Link from 'next/link';
import cookie from 'js-cookie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMenuKey } from '../redux/store'

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    const { updateMenuKey } = this.props
    updateMenuKey(e.key)
  };

  render() {
    let menu;
    if (cookie.get('token') !== undefined) {
      menu = (
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[this.props.selectedKey]}
          style={{ paddingTop: 10 }}
          onClick= {this.handleClick}
        >
          <Menu.Item key="project">
            <Link  href='/' ><a>Project</a></Link>
          </Menu.Item>
          <Menu.Item key="floor" > 
            <Link  href='/floor'><a>Floor</a></Link>
          </Menu.Item>
        </Menu>
      );
    } else {
      menu = "";
    }

    return <div>{menu}</div>;
  }
}

const mapStateToProps = ({selectedKey}) => ({selectedKey}) 

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMenuKey }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)



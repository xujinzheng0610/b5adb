import React, { Component } from "react";
import {logout} from "../hocs/LoginGate"
import "../assets/header-css.less";
import Router from 'next/router'
import cookie from 'js-cookie';

class User extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick(){
    Router.push('/login');
  }

  handleLogoutClick(){
    logout();
    Router.push('/login');
  }

  render() {
    let linkRequest;
    if (cookie.get('token') !== undefined) {
      linkRequest = (
        <div>
          <a onClick={this.handleLogoutClick}>Log Out</a>
        </div>
      );
    } else {
      linkRequest = (
        <div>
          <a onClick={this.handleLoginClick}>Please Log In</a>
        </div>
      );
    }
    return (
    <div>
        <div className="User">{linkRequest}</div>
    </div>
    );
  }
}

export default User

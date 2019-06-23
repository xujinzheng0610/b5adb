import React from "react";
// import Router from "next/router";
import PageLogin from "../pages/login";
import { connect } from "react-redux";

const withLoginGate = WrappedComponent => {
  const LoginGate = class extends React.Component {
    getTokenFromLocalStorage = () => {
      return localStorage.getItem("b5aDBtoken");
    };

    checkLoggedIn = token => {
      if (!token) return false;
      // TODO: verify token with server
    };

    render() {
      const token = this.getTokenFromLocalStorage();
      const loggedIn = this.checkLoggedIn(token);
      return loggedIn ? <WrappedComponent /> : <PageLogin />;
    }
  };

  const mapStateToProps = state => ({
    loggedIn: state.loggedIn
  });

  return connect(mapStateToProps)(LoginGate);
};

export default withLoginGate;

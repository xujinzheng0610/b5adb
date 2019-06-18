/* eslint-disable */
import React, {Component} from 'react'
import { connect } from 'react-redux'

import "../assets/header-css.less"

class User extends Component {
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.state = {login: false};
    }

    handleLoginClick(){
        this.setState({login: true});
    }

    handleSignupClick(){
        this.setState({login: false});
    }

    render() {
        let linkRequest
        if (this.props.loggedIn) {
            linkRequest = (<div> <a>Welcome!</a> <a>Log Out</a> </div>)
        }
        else {
            linkRequest = (<div> 
                <a onClick={this.handleLoginClick}>Log In</a> 
                <a onClick={this.handleSignupClick}>Sign Up</a> 
                </div>);
        }

        return (
            <div className="User">
                {linkRequest}
            </div>
        )
    }

}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn })

export default connect(
  mapStateToProps
)(User)

import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";

import AccountsWrapper from "../../components/Login";
import Login from "../../components/Login/Login";

import "./styles.css";

class LoginContainer extends Component {
    state = {};
    render() {
        const { currentUserId } = this.props;
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="loginContainer">
                    <AccountsWrapper />
                </div>
            );
        }
    }
}

export default withTracker(() => {
    return {
        currentUserId: Meteor.userId()
    };
})(LoginContainer);

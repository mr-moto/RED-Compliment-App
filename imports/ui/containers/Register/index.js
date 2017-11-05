import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";

import { SignIn } from "../../components/SignIn";

import "./styles.css";

const register = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
     Accounts.createUser({
            email: email,
            password: password
        });
}

class RegisterContainer extends Component {
    state = {};
    render() {
        const { currentUserId } = this.props;
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="registerContainer">
                    <SignIn submit={register} label1={'Back'} label2={'Register'} link={'/login'} />
                </div>
            );
        }
    }
}

export default withTracker(() => {
    return {
        currentUserId: Meteor.userId()
    };
})(RegisterContainer);

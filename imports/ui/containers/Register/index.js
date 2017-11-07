import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect } from "react-router-dom";

import { SignIn } from "../../components/SignIn";

import "./styles.css";

const register = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
     Accounts.createUser({
            email: email,
            password: password,
            profile: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                photo: null
            }
        });
}

class RegisterContainer extends Component {
    render() {
        const { currentUserId } = this.props;
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="registerContainer">
                    <SignIn submit={register} label1={'Back'} label2={'Register'} link={'/login'} register={true} />
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

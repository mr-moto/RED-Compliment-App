import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect, Router } from "react-router-dom";
import TextLoop from "react-text-loop";

import { SignIn } from "../../components/SignIn";

import "./styles.css";

const login = e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    Meteor.loginWithPassword(email, password);
};
class LoginContainer extends Component {
    state = {};
    render() {
        const { currentUserId } = this.props;
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="loginContainer">
                    <div className="login-logo">
                        <img src="/images/logo_kindred.1.svg" />
                    </div>
                    <SignIn
                        className="signIn"
                        submit={login}
                        label1={"Register"}
                        label2={"Sign In"}
                        link={"/register"}
                        register={false}
                    />
                    <div className="quotesContainer">
                        <h2>
                            <TextLoop>
                                <div className="quotes-text">
                                    <p>"No act of kindness, no matter how small,</p>
                                    <p>is ever wasted."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"Treat everyone with respect and kindness. </p>
                                    <p>Period. No exceptions."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"Kindness is always fashionable, and  </p>
                                    <p>always welcome."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"What wisdom can you find that is </p>
                                    <p>greater than kindness?"</p>
                                </div>
                            </TextLoop>
                        </h2>
                    </div>
                </div>
            );
        }
    }
}

export default withTracker(() => {
    return {
        currentUserId: Meteor.userId(),
    };
})(LoginContainer);
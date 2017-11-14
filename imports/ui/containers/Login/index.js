import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect, Router } from "react-router-dom";
import TextLoop from "react-text-loop";

import { SignIn } from "../../components/SignIn";

import "./styles.css";

class LoginContainer extends Component {
    state = { register: false };
    render() {
        login = e => {
            e.preventDefault();
            let email = e.target.email.value;
            let password = e.target.password.value;
            Meteor.loginWithPassword(email, password);
        };

        register = e => {
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
        };

        registerNew = e => {
            this.setState({ register: true });
        };
        signIn = e => {
            this.setState({ register: false });
        };

        const { currentUserId } = this.props;
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="loginContainer">

                    <div className="login-logo">
                        <img src="/images/logo_kindred.1.svg" />
                    </div>
                    {this.state.register === true ? (
                        <SignIn
                            className="signIn"
                            submit={register}
                            button={signIn}
                            label1={"Back"}
                            label2={"Register"}
                            register={this.state.register}
                        />
                    ) : (
                        <SignIn
                            className="signIn"
                            submit={login}
                            button={registerNew}
                            label1={"Register"}
                            label2={"Sign In"}
                            register={this.state.register}
                        />
                    )}
                    <div className="quotesContainer">
                        <h2>
                            <TextLoop>
                                <div className="quotes-text">
                                    <p>"No act of kindness, no matter </p>
                                    <p>how small, is ever wasted."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"Treat everyone with respect and </p>
                                    <p>kindness. Period. No exceptions."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"Kindness is always fashionable,</p>
                                    <p>and always welcome."</p>
                                </div>
                                <div className="quotes-text">
                                    <p>"What wisdom can you find that</p>
                                    <p>is greater than kindness?"</p>
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
        currentUserId: Meteor.userId()
    };
})(LoginContainer);

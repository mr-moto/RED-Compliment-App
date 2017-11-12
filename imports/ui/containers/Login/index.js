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
                                <div>
                                    <p>asdfhaslkdfha adf asdfa</p>
                                    <p>hellooo new line</p>
                                </div>
                                <div>
                                    <p>asdf asd fasdfsdf</p>
                                    <p> asf s d poop</p>
                                </div>
                                <div>
                                    <p>asd f asdf asfd </p>
                                    <p>💩💩💩💩💩💩 💩💩 💩💩</p>
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
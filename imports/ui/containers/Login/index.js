import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Redirect, Router } from "react-router-dom";
import TextLoop from "react-text-loop";
import { Quotes } from "../../../api/quotes/quotes";

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
        const { currentUserId, quotes } = this.props;
        console.log(quotes);
        if (currentUserId) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="loginContainer">
                    <SignIn
                        submit={login}
                        label1={"Register"}
                        label2={"Sign In"}
                        link={"/register"}
                        register={false}
                    />
                    {quotes ? (<div className="quotesContainer">
                        <h2>
                            <TextLoop>
                                <span> hello </span>
                                {quotes.map(quote => {
                                    return (
                                        <span key={quote._id}>{quote.quote}</span>
                                    )
                                })}
                            </TextLoop> and something else.
                        </h2>
                    </div>) : (null)}
                    
                </div>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe("quotes");
    return {
        currentUserId: Meteor.userId(),
        quotes: Quotes.find({}, {_id: 0, quote: 1}).fetch()
    };
})(LoginContainer);

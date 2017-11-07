import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import {
    FlatButton,
    RaisedButton,
    Avatar,
    Paper,
    TextField,
    Divider,
    List,
    ListItem
} from "material-ui";

import {
    DeleteAccount,
    ProfileImage,
    Password
} from "../../components/Settings";

import "./styles.css";

class SettingsContainer extends Component {
    state = {
        match: true
    };
    render() {
        changePassword = e => {
            e.preventDefault();
            let oldPassword = e.target.oldPassword.value;
            let newPassword = e.target.newPassword.value;
            let newPassword2 = e.target.newPassword2.value;
            if (
                newPassword === newPassword2 &&
                newPassword.length > 0 &&
                newPassword2.length > 0
            ) {
                Accounts.changePassword(oldPassword, newPassword, () => {
                    location.reload();
                });
            } else {
                this.setState({ match: false });
                console.log("does not match");
            }
        };

        const { currentUser } = this.props;
        const style = {
            height: "100%",
            width: "100%",
            padding: "1rem",
            marginTop: 20,
            display: "inline-block"
        };
        if (currentUser) {
            return (
                <div className="settingsContainer">
                    <ProfileImage currentUser={currentUser} />
                    <Password
                        passwordSubmit={changePassword}
                        match={this.state.match}
                    />
                    <DeleteAccount />
                </div>
            );
        }
        return <div>Is Loading...</div>;
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    };
})(SettingsContainer);

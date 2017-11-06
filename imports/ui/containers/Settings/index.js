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

import "./styles.css";
class SettingsContainer extends Component {
    state = {};
    render() {
        const { currentUser } = this.props;
        const style = {
            height: "100%",
            width: "100%",
            padding: "1rem",
            marginTop: 20,
            display: "inline-block"
        };
        return (
            <div className="settingsContainer">
                <Paper
                    style={style}
                    zDepth={1}
                    children={
                        <div>
                            <p>Change Profile Picture</p>
                            <Divider />
                            <div className="changePhoto">
                                <Avatar src="images/uxceo-128.jpg" />
                                <RaisedButton label="Change Photo" />
                            </div>
                        </div>
                    }
                />
                <Paper
                    style={style}
                    zDepth={1}
                    children={
                        <div>
                            <p>Change Password</p>
                            <Divider />
                            <TextField hintText="Old Password" />
                            <TextField hintText="New Password" />
                            <TextField hintText="Confirm New Password" />
                        </div>
                    }
                />
                <Paper style={style} zDepth={1} children={<RaisedButton label="Delete Account" />} />
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    };
})(SettingsContainer);

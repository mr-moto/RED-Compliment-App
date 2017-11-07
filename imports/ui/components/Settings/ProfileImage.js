import React from "react";
import { RaisedButton, Paper, Avatar, Divider } from "material-ui";

const ProfileImage = ({ currentUser }) => {
    const style = {
        height: "100%",
        width: "100%",
        padding: "1rem",
        marginTop: 20,
        display: "inline-block"
    };
    return (
        <Paper
            style={style}
            zDepth={1}
            children={
                <div>
                    <p>Change Profile Picture</p>
                    <Divider />
                    <div className="changePhoto">
                        <Avatar src={currentUser.profile.photo} size={50} />
                        <RaisedButton label="Change Photo" />
                    </div>
                </div>
            }
        />
    );
};

export default ProfileImage;

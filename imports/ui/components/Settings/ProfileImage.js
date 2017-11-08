import React from "react";
import {
    config,
    firebaseApp,
    firebaseStorage
} from "../../../api/firebase//firebase";
import {
    RaisedButton,
    Paper,
    Avatar,
    Divider,
    LinearProgress
} from "material-ui";

const ProfileImage = ({ currentUser, uploadHandler, imageUrl, progress }) => {
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
                        <Avatar src={imageUrl} size={50} />
                        <RaisedButton
                            label="Change Photo"
                            containerElement="label"
                        >
                            <input
                                type="file"
                                hidden
                                onChange={uploadHandler}
                            />
                        </RaisedButton>
                    </div>
                    {progress === 0 ? null : <LinearProgress mode="determinate" value={progress} />}
                     
                </div>
            }
        />
    );
};

export default ProfileImage;

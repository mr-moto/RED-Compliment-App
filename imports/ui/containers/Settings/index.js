import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { CircularProgress } from "material-ui";

import { firebaseStorage } from "../../../api/firebase/firebase";
import {
    DeleteAccount,
    ProfileImage,
    Password
} from "../../components/Settings";

import "./styles.css";

class SettingsContainer extends Component {
    state = {
        match: true,
        imageUrl: "",
        uploadProgress: 0
    };

    render() {
        const { currentUser, currentUserId } = this.props;

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

        imageUploadHandler = e => {
            // this.setState({uploadProgress: 0})
            const file = e.target.files[0];
            const storageRef = firebaseStorage.ref(
                currentUserId + "/" + file.name
            );
            // storageRef.put(file).then(snapshot => {
            //     this.setState({ imageUrl: snapshot.downloadURL });
            //     console.log(snapshot)

            //     const percentage =
            //         snapshot.bytesTransferred / snapshot.totalBytes * 100;
            //     this.setState({ uploadProgress: percentage });
            // });

            const uploadTask = storageRef.put(file);
            uploadTask.on(
                "state_changed",
                (snapshot = () => {
                    var percent =
                        uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes * 100;
                    this.setState({ uploadProgress: percent });
                }),
                function(error) {
                    // Handle unsuccessful uploads
                    // console.log(error)
                },
                (snapshot = () => {
                    // console.log(snapshot)
                    // Handle successful uploads on complete
                    this.setState({
                        imageUrl: uploadTask.snapshot.downloadURL,
                        uploadProgress: 0
                    });
                    Meteor.users.update({_id: currentUserId}, {$set: {"profile.photo": uploadTask.snapshot.downloadURL}});
                })
            );
        };

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
                    <ProfileImage
                        currentUser={currentUser}
                        uploadHandler={imageUploadHandler}
                        imageUrl={this.state.imageUrl}
                        progress={this.state.uploadProgress}
                    />
                    <Password
                        passwordSubmit={changePassword}
                        match={this.state.match}
                    />
                    <DeleteAccount />
                </div>
            );
        }
        return (
            <div className="loader">
                <CircularProgress />
            </div>
        );
    }
}

export default withTracker(() => {

    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId()
    };
})(SettingsContainer);

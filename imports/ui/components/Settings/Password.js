import React from "react";
import { RaisedButton, Paper, Divider, TextField } from "material-ui";

const Password = ({ passwordSubmit, match }) => {
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
                <form onSubmit={passwordSubmit}>
                    <p>Change Password</p>
                    <Divider />
                    <TextField
                        className="passwordTextField"
                        hintText="Old Password"
                        type="password"
                        name="oldPassword"
                    />

                    {match === true ? (
                        <div>
                            <TextField
                                className="passwordTextField"
                                hintText="New Password"
                                type="password"
                                name="newPassword"
                            />
                            <TextField
                                className="passwordTextField"
                                hintText="Confirm New Password"
                                type="password"
                                name="newPassword2"
                            />
                        </div>
                    ) : (
                        <div>
                            <TextField
                                className="passwordTextField"
                                hintText="New Password"
                                errorText="Passwords do no match"
                                type="password"
                                name="newPassword"
                            />
                            <TextField
                                className="passwordTextField"
                                hintText="Confirm New Password"
                                errorText="Passwords do no match"
                                type="password"
                                name="newPassword2"
                            />
                        </div>
                    )}
                    <RaisedButton
                        className="changePasswordBtn"
                        label="Change Password"
                        type="submit"
                    />
                </form>
            }
        />
    );
};

export default Password;

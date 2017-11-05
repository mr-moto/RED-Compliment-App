import React from "react";
import { TextField, Paper, RaisedButton } from "material-ui";

import "./styles.css";

const style = {
    height: 250,
    width: "100%",
    textAlign: "center",
    display: "inline-block"
};

const SignIn = ({submit, label1, label2, link }) => {
    return (
        <Paper
            style={style}
            zDepth={1}
            children={
                <div className="formContainer">
                    <form onSubmit={submit} >
                        <TextField type="email" hintText="Email" name="email"/>
                        <TextField type="password" hintText="password" name="password"/>
                        <div className="loginButtons">
                            <RaisedButton label={label1} className="button" href={link}/>
                            <RaisedButton
                                label={label2}
                                primary={true}
                                className="button"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            }
        />
    );
};

export default SignIn;

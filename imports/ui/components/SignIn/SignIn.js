import React from "react";
import { TextField, Paper, RaisedButton } from "material-ui";

import "./styles.css";

const style = {
  height: 300,
  width: "100%",
  textAlign: "center",
  display: "inline-block"
};

const SignIn = ({ submit, label1, label2, button, register }) => {
  console.log(register)
  return (
    <Paper
      style={style}
      zDepth={1}
      children={
        <div className="formContainer">
          <form onSubmit={submit}>
            {register ? (
              <div>
                <TextField type="text" hintText="First Name" name="firstName" />
                <TextField type="text" hintText="Last name" name="lastName" />
              </div>
            ) : null}
            <TextField type="email" hintText="Email" name="email" />
            <TextField type="password" hintText="password" name="password" />
            <div className="loginButtons">
              <RaisedButton label={label1} className="button" onClick={button} />
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

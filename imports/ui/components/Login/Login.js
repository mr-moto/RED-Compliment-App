import React from 'react';
import { TextField, Paper } from "material-ui";

const style = {
  height: 300,
  width: "100%",
  textAlign: 'center',
  display: 'inline-block',
};

const Login =() => {
    return (
        <Paper 
            style={style} 
            zDepth={1} 
            children={
                <div>
                    <form>
                        <TextField type="email" hintText="Email" />
                        <TextField type="password" hintText="password" />
                    </form>
                </div>
            }
        />
    );
}

export default Login;
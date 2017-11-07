import React from "react";
import { RaisedButton, Paper } from "material-ui";

const DeleteAccount = () => {
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
            children={<RaisedButton label="Delete Account" />}
        />
    );
};

export default DeleteAccount;

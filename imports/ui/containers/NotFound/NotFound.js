import React, { Component } from "react";
import { RaisedButton } from "material-ui";

import "./styles.css";
class NotFound extends Component {
    state = {  }
    render() {
        return (
            <div className="notFoundContainer">
                <div className="logo">logo here</div>
                <p>Page could not be found!</p>
                <RaisedButton label="Home" href="/" />
            </div>
        );
    }
}

export default NotFound;
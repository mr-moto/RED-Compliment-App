import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "../imports/ui/containers/App";
import { Routes } from "../imports/ui/routes/index";
import { BrowserRouter as Router } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./main.css";

Meteor.startup(() => {
  ReactDOM.render(
    // <MuiThemeProvider>
    // <Router>
    <App />,
    // </Router>,
    // </MuiThemeProvider>,
    document.getElementById("root")
  );
});

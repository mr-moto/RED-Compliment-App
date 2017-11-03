import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Quotes } from "../../../api/quotes/quotes";
import { Suggestions } from "../../../api/suggestions/suggestions";
import { Badges } from "../../../api/badges/badges";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./styles";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    );
  }
}

// PROP TYPES HERE

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
//   currentUser: PropTypes.object
// };

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    posts: Posts.find({}).fetch(),
    quotes: Quotes.find({}).fetch(),
    badges: Badges.find({}).fetch(),
    suggestions: Suggestions.find({}).fetch()
  };
})(App);

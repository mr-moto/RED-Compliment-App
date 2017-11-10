import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "../../layout";
import Routes from "../../../startup/client/routes.js";

import { PostsContainer } from "../Posts";

// import { withTracker } from "meteor/react-meteor-data";
// import { Posts } from "../../../api/posts/posts";
// import { Suggestions } from "../../../api/suggestions/suggestions";
// import { Badges } from "../../../api/badges/badges";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

// PROP TYPES HERE

// App.propTypes = {
//   posts: PropTypes.array.isRequired,
//   currentUser: PropTypes.object
// };

// export default withTracker(() => {
//   return {
//     currentUser: Meteor.user(),
//     posts: Posts.find({}).fetch(),
//     quotes: Quotes.find({}).fetch(),
//     badges: Badges.find({}).fetch(),
//     suggestions: Suggestions.find({}).fetch()
//   };
// })(App);

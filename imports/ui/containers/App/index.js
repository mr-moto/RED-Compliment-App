import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Quotes } from "../../../api/quotes/quotes";
import { Suggestions } from "../../../api/suggestions/suggestions";
import { Badges } from "../../../api/badges/badges";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Test</div>;
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

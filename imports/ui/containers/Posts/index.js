import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Quotes } from "../../../api/quotes/quotes";
import { Suggestions } from "../../../api/suggestions/suggestions";
import { Badges } from "../../../api/badges/badges";
import Paper from "material-ui/Paper";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RecentList from "../../components/RecentCompliments/RecentList/";
import RecentListItem from "../../components/RecentCompliments/RecentListItems/";
import PostItem from "../../components/Posts/PostItem/";

import "./styes";

class PostsContainer extends Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Most Recent" />,
      <MenuItem key={2} value={2} primaryText="Most Popular" />,
      <MenuItem key={3} value={3} primaryText="Trending" />
    ];

    return (
      <div className="post-wrapper">
        <div className="recent-container">
          <Paper className="posts-paper" zDepth={1}>
            <h2 className="recent-subtitle">
              Your Recently Received Compliments
            </h2>
            <RecentList>
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
              <RecentListItem recentitem="Lorizzle ipsizzle dolor amet, crunk shit pizzle. Nullizzle
                  crackalackin velizzle, pot volutpizzle, suscipit phat, fo
                  shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle,
                  brizzle." />
            </RecentList>
          </Paper>
        </div>
        <div className="filter-container">
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Styled Floating Label Text"
            floatingLabelStyle={{ color: "#ed4242" }}
            labelStyle={{ color: "white" }}
            selectedMenuItemStyle={{ color: "#ed4242" }}
          >
            {items}
          </SelectField>
        </div>
        <div className="posts-container">
          <PostItem
            content="Some beautiful beautiful text..."
            to="Mary Jane"
            from="Secret"
          />
          <PostItem
            content="I wanna write you a haiku"
            to="Joe Rogan"
            from="Who"
          />
          <PostItem
            content="Your hair is just so awesome"
            to="Queen Elizabeth"
            from="What"
          />
          <PostItem
            content="You are like... the nicest person ever"
            to="Justin Trudeau"
            from="When"
          />
          <PostItem content="Have my babies" to="Donald J Trump" from="Where" />
        </div>
      </div>
    );
  }
}

Posts.propTypes = {};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    posts: Posts.find({}).fetch(),
    quotes: Quotes.find({}).fetch(),
    badges: Badges.find({}).fetch(),
    suggestions: Suggestions.find({}).fetch()
  };
})(PostsContainer);

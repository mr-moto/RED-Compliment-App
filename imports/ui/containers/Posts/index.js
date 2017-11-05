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

  getRecentCompliments = item => {
    let itemsContainer = [];
    let i = 0;

    while (i < 3 && i < item.length) {
      itemsContainer.push(item[i].body);
      i++;
    }

    return itemsContainer;
  };

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Most Recent" />,
      <MenuItem key={2} value={2} primaryText="Most Popular" />,
      <MenuItem key={3} value={3} primaryText="Trending" />
    ];

    const { users, posts } = this.props;

    console.log(this.props);

    if (posts.length > 0 && users.length > 0) {
      return (
        <div className="post-wrapper">
          <div className="recent-container">
            <Paper className="posts-paper" zDepth={1}>
              <h2 className="recent-subtitle">
                Your Recently Received Compliments
              </h2>
              <RecentList>
                {this.getRecentCompliments(posts).map(item => {
                  return (
                    <RecentListItem
                      key={Math.random()}
                      recentitem={`${item}`}
                    />
                  );
                })}
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
            {posts.map(post => {
              return (
                <PostItem
                  key={post._id}
                  content={post.body}
                  to={post.to}
                  from={post.from}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return <div>Is Loading...</div>;
  }
}

Posts.propTypes = {};

export default withTracker(() => {
  Meteor.subscribe("posts");
  Meteor.subscribe("users");

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find({}).fetch(),
    posts: Posts.find({}).fetch()
  };
})(PostsContainer);

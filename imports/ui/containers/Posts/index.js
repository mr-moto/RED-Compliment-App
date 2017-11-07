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
import CircularProgress from "material-ui/CircularProgress";

// forms
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./styes";

class PostsContainer extends Component {
  state = {
    shareIsExpanded: false
  };

  handleChange = (event, index, value) => this.setState({ value });

  getRecentCompliments = item => {
    let itemsContainer = [];
    let i = 0;

    while (i < 3 && i < item.length) {
      itemsContainer.push(item[item.length - 1 - i].body);
      i++;
    }

    return itemsContainer;
  };

  showShareForm = e => {
    const { shareIsExpanded } = this.state;

    shareIsExpanded
      ? this.setState({
          shareIsExpanded: false
        })
      : this.setState({
          shareIsExpanded: true
        });
  };

  addCompliment = e => {
    e.preventDefault();
    let to = e.target.shareTo.value;
    let body = e.target.shareBody.value;
    let from = this.props.currentUser;

    Meteor.call("posts.addCompliment", to, body, from, this.props.users);

    e.target.shareTo.value = "";
    e.target.shareBody.value = "";
  };

  render() {
    const items = [
      <MenuItem key={1} value={1} primaryText="Most Recent" />,
      <MenuItem key={2} value={2} primaryText="Most Popular" />,
      <MenuItem key={3} value={3} primaryText="Trending" />
    ];

    const { users, posts, currentUser } = this.props;
    const { shareIsExpanded } = this.state;

    if (posts.length > 0 && users.length > 0) {
      return (
        <div className="post-wrapper">
          <div className="recent-container">
            <Paper className="posts-paper" zDepth={1} rounded={false}>
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
          <Paper
            id="share-container"
            className={`share-container ${shareIsExpanded
              ? "share-clicked"
              : "share-collapsed"}`}
          >
            <Paper
              className="share-bar"
              zDepth={1}
              rounded={false}
              style={{ background: "#3c3737" }}
              onClick={() => {
                this.showShareForm();
              }}
            >
              <span className="share-button">+</span>
            </Paper>
            <form onSubmit={this.addCompliment} id="compliment-form">
              <div className="share-fields">
                <TextField
                  className="share-to"
                  id="share-to"
                  name="shareTo"
                  hintText="To."
                />
                <TextField
                  className="share-body"
                  id="share-body"
                  name="shareBody"
                  hintText="Compliment"
                  multiLine={true}
                />
                <RaisedButton
                  label="Submit"
                  type="submit"
                  primary={true}
                  style={{ margin: 12 }}
                />
              </div>
            </form>
          </Paper>
        </div>
      );
    }
    console.log(this.state.shareIsExpanded);
    return (
      <div className="loading-container">
        <CircularProgress
          className="page-loader"
          color="#ed4242"
          size={80}
          thickness={5}
        />
        <p className="loading-text">Loading...</p>
      </div>
    );
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

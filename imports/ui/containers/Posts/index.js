import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Suggestions } from "../../../api/suggestions/suggestions";
import { Badges } from "../../../api/badges/badges";
import Paper from "material-ui/Paper";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RecentList from "../../components/RecentCompliments/RecentList/";
import RecentListItem from "../../components/RecentCompliments/RecentListItems/";
import PostItem from "../../components/Posts/PostItem/";
import ShareForm from "../../components/Share/ShareForm";
import CircularProgress from "material-ui/CircularProgress";

import "./styles";

class PostsContainer extends Component {
  state = {
    shareIsExpanded: false,
    toValue: "",
    bodyValue: ""
  };

  handleFilterChange = (event, index, value) => this.setState({ value });

  handleToChange = (event, index, toValue) =>
    this.setState({ toValue: event.target.value });

  handleBodyChange = (event, index, bodyValue) =>
    this.setState({ bodyValue: event.target.value });

  getRecentCompliments = () => {
    const { currentUser, posts } = this.props;
    const itemsContainer = [];
    const filteredPosts = currentUser
      ? posts.filter(post => post.to._id === currentUser._id)
      : null;

    if (!currentUser) return;

    for (let i = 1; i <= 3; i++) {
      if (
        filteredPosts[filteredPosts.length - i] !== undefined ||
        filteredPosts[filteredPosts.length - i] !== null
      ) {
        itemsContainer.push(filteredPosts[filteredPosts.length - i]);
      }
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

    let user = Meteor.call(
      "posts.addCompliment",
      to,
      body,
      from,
      this.props.users
    );

    this.setState({
      toValue: "",
      bodyValue: "",
      shareIsExpanded: false
    });
  };

  render() {

    const items = [
      <MenuItem key={1} value={1} primaryText="Most Recent" />,
      <MenuItem key={2} value={2} primaryText="Most Popular" />,
      <MenuItem key={3} value={3} primaryText="Trending" />
    ];

    const { users, posts, currentUser, suggestions } = this.props;
    const { shareIsExpanded, toValue, bodyValue } = this.state;

    if (posts.length > 0 && users.length > 0) {
      return (
        <div className="post-wrapper">
          <div className="recent-container">
            <Paper className="posts-paper" zDepth={1} rounded={false}>
              <h2 className="recent-subtitle">
                Your Recently Received Compliments
              </h2>
              <RecentList>
                {this.getRecentCompliments() !== undefined
                  ? this.getRecentCompliments().map(item => {
                      return item !== undefined ? (
                        <RecentListItem
                          key={Math.random()}
                          recentitem={`${item.body}`}
                        />
                      ) : null;
                    })
                  : null}
              </RecentList>
            </Paper>
          </div>
          <div className="filter-container">
            <SelectField
              value={this.state.value}
              onChange={this.handleFilterChange}
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
                  post={post._id}
                />
              );
            })}
          </div>
          <ShareForm
            shareIsExpanded={shareIsExpanded}
            showShareForm={this.showShareForm}
            addCompliment={this.addCompliment}
            toValue={toValue}
            bodyValue={bodyValue}
            handleToChange={this.handleToChange}
            handleBodyChange={this.handleBodyChange}
            suggestionsList={suggestions["0"]}
          />
        </div>
      );
    }
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

Posts.propTypes = {
  currentUser: PropTypes.object,
  posts: PropTypes.arrayOf(PropTypes.object),
  suggestions: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.arrayOf(PropTypes.object)
};

export default withTracker(() => {
  Meteor.subscribe("posts");
  Meteor.subscribe("users");
  Meteor.subscribe("suggestions");

  return {
    currentUser: Meteor.user(),
    users: Meteor.users.find({}).fetch(),
    posts: Posts.find({}).fetch(),
    suggestions: Suggestions.find().fetch()
  };
})(PostsContainer);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Posts } from "/imports/api/posts/posts";
import "./style";

class PostIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFound: false
    };
  }

<<<<<<< HEAD
  componentDidMount() {
    const { post, collection } = this.props;
    const { isFound } = this.state;

    if (this.state !== undefined) {
      this.isFound(post, collection);
    }
  }

  isFound = (post, collection) => {
=======
  handleAction = collection => {
    const { post } = this.props;

    // check to see if current user has already voted
>>>>>>> 6588a016f74edd561a2ee465fae18e20de40b772
    const isFound = Posts.find({
      _id: `${post}`,
      [collection]: { $elemMatch: { $eq: `${Meteor.user()._id}` } }
    }).fetch();

    if (isFound.length) {
      this.setState({ isFound: true });
<<<<<<< HEAD
    } else {
      this.setState({ isFound: false });
    }
  };

  handleAction = collection => {
    const { post } = this.props;
    const { isFound } = this.state;

    if (isFound) {
      Meteor.call("posts.removeUserId", post, collection, error => {
        !error ? this.setState({ isFound: false }) : console.log(error);
      });
    } else {
      Meteor.call("posts.addUserId", post, collection, error => {
        !error ? this.setState({ isFound: true }) : console.log(error);
      });
=======
      Posts.update(
        { _id: `${post}` },
        { $pull: { [collection]: `${Meteor.user()._id}` } }
      );
    } else {
      this.setState({ isFound: false });
      Posts.update(
        { _id: `${post}` },
        { $addToSet: { [collection]: `${Meteor.user()._id}` } }
      );
>>>>>>> 6588a016f74edd561a2ee465fae18e20de40b772
    }
  };

  render() {
    const { collection, iconName } = this.props;
<<<<<<< HEAD
    const { isFound } = this.state;

    return (
      <li className="posts-social-list-item">
        <i
          className={`${iconName} ${isFound
            ? "posts-social-color-active"
            : null}`}
          onClick={() => {
            this.handleAction(collection);
          }}
=======
    return (
      <li className="posts-social-list-item">
        <i
          onClick={() => {
            this.handleAction(collection);
          }}
          className={iconName}
>>>>>>> 6588a016f74edd561a2ee465fae18e20de40b772
          aria-hidden="true"
        />
      </li>
    );
  }
}
PostIcon.propTypes = {};

export default PostIcon;

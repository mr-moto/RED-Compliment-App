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

  handleAction = collection => {
    const { post } = this.props;

    // check to see if current user has already voted
    const isFound = Posts.find({
      _id: `${post}`,
      [collection]: { $elemMatch: { $eq: `${Meteor.user()._id}` } }
    }).fetch();

    if (isFound.length) {
      this.setState({ isFound: true });
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
    }
  };

  render() {
    const { collection, iconName } = this.props;
    return (
      <li className="posts-social-list-item">
        <i
          onClick={() => {
            this.handleAction(collection);
          }}
          className={iconName}
          aria-hidden="true"
        />
      </li>
    );
  }
}
PostIcon.propTypes = {};

export default PostIcon;

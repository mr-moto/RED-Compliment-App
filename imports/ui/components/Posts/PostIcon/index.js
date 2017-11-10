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

  componentDidMount() {
    const { post, collection } = this.props;
    const { isFound } = this.state;

    if (this.state !== undefined) {
      this.isFound(post, collection);
    }
  }

  isFound = (post, collection) => {
    const isFound = Posts.find({
      _id: `${post}`,
      [collection]: { $elemMatch: { $eq: `${Meteor.user()._id}` } }
    }).fetch();

    if (isFound.length) {
      this.setState({ isFound: true });
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
    }
  };

  render() {
    const { collection, iconName } = this.props;
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
          aria-hidden="true"
        />
      </li>
    );
  }
}

PostIcon.propTypes = {
  collection: PropTypes.string,
  iconName: PropTypes.string,
  post: PropTypes.string
};

export default PostIcon;

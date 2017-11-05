import React from "react";
import PropTypes from "prop-types";
import "./style";

const PostIcon = ({ iconName }) => {
  return (
    <li className="posts-social-list-item">
      <i className={iconName} aria-hidden="true" />
    </li>
  );
};

PostIcon.propTypes = {};

export default PostIcon;

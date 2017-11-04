import React from "react";
import PropTypes from "prop-types";
import "./styles";

const PostBody = ({ content }) => {
  return (
    <div>
      <p className="posts-body">{content}</p>
    </div>
  );
};

PostBody.propTypes = {};

export default PostBody;

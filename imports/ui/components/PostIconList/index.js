import React from "react";
import "./styles";

const PostIconList = props => {
  const { children } = props;
  return <ul className="posts-social-list">{children}</ul>;
};

export default PostIconList;

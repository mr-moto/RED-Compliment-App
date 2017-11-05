import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import PostAvatar from "../PostAvatar/";
import PostIconList from "../PostIconList/";
import PostIcon from "../PostIcon/";
import PostBody from "../PostBody/";
import "./styles";

const PostItem = ({ content, to, from }) => {
  return (
    <Paper className="post-item-container" zDepth={1}>
      <p className="posts-to">To. {to.profile.firstName}</p>
      <PostBody content={content} />
      <div className="posts-footer">
        <div className="posts-footer-left">
          <div className="posts-social-icons-container">
            <PostIconList>
              <PostIcon iconName="fa fa-thumbs-o-up" />
              <PostIcon iconName="fa fa-share" />
              <PostIcon iconName="fa fa-hand-peace-o" />
              <PostIcon iconName="fa fa-heart-o" />
            </PostIconList>
          </div>
        </div>
        <div className="posts-footer-right">
          <p className="posts-from">
            From,<br /> {from.profile.firstName}
          </p>
          <PostAvatar src={from.profile.photo} />
        </div>
      </div>
    </Paper>
  );
};

PostItem.propTypes = {};

export default PostItem;

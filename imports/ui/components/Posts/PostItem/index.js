import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import PostAvatar from "../PostAvatar/";
import PostIconList from "../PostIconList/";
import PostIcon from "../PostIcon/";
import PostBody from "../PostBody/";
import "./styles";

const PostItem = ({ post, content, to, from }) => {
  return (
    <Paper className="post-item-container" zDepth={1} rounded={false}>
      <p className="posts-to">To. {to.profile.firstName}</p>
      <PostBody content={content} />
      <div className="posts-footer">
        <div className="posts-footer-left">
          <div className="posts-social-icons-container">
            <PostIconList>
              <div className="icon-wrapper">
                <span className="social-counter">7</span>
                <PostIcon
                  post={post}
                  collection="upvotes"
                  iconName="fa fa-thumbs-o-up"
                />
              </div>
              <div className="icon-wrapper">
                <span className="social-counter">2</span>
                <PostIcon
                  post={post}
                  collection="dislike"
                  iconName="fa fa-thumbs-o-down"
                />
              </div>
              <div className="icon-wrapper">
                <span className="social-counter">3</span>
                <PostIcon
                  post={post}
                  collection="sarcasm"
                  iconName="fa fa-hand-peace-o"
                />
              </div>
            </PostIconList>
          </div>
        </div>
        <div className="posts-footer-right">
          <p className="posts-from">
            From,<br /> {from.profile.firstName}
          </p>
          <PostAvatar avatarSize={50} src={from.profile.photo} />
        </div>
      </div>
    </Paper>
  );
};

PostItem.propTypes = {};

export default PostItem;

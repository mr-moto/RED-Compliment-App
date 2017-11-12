import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import PostAvatar from "../PostAvatar/";
import PostIconList from "../PostIconList/";
import PostIcon from "../PostIcon/";
import PostBody from "../PostBody/";
import { Posts } from "../../../../api/posts/posts";
import { withTracker } from "meteor/react-meteor-data";
import "./styles";

const PostItem = ({ postID, content, to, from, postObj }) => {
  return (
    <Paper className="post-item-container" zDepth={1} rounded={false}>
      <div className="posts-header">
        <div className="posts-header-left">
          <p className="posts-to">
            To.<br /> {to.profile.firstName}
          </p>
          <PostAvatar avatarSize={50} src={to.profile.photo} />
        </div>
        <div className="posts-header-right">
          <p>{postObj.dateCreated}</p>
        </div>
      </div>
      <PostBody content={content} />
      <div className="posts-footer">
        <div className="posts-footer-left">
          <div className="posts-social-icons-container">
            <PostIconList>
              <div className="icon-wrapper">
                <span className="social-counter">
                  {postObj.upvotes === undefined ? 0 : postObj.upvotes.length}
                </span>
                <PostIcon
                  post={postID}
                  collection="upvotes"
                  iconName="fa fa-thumbs-o-up"
                />
              </div>
              <div className="icon-wrapper">
                <span className="social-counter">
                  {postObj.sarcasm === undefined ? 0 : postObj.sarcasm.length}
                </span>
                <PostIcon
                  post={postID}
                  collection="sarcasm"
                  iconName="fa fa-hand-peace-o"
                />
              </div>
              <div className="icon-wrapper">
                <span className="social-counter">
                  {postObj.dislike === undefined ? 0 : postObj.dislike.length}
                </span>
                <PostIcon
                  post={postID}
                  collection="dislike"
                  iconName="fa fa-thumbs-o-down"
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

export default withTracker(() => {
  Meteor.subscribe("posts");

  return {
    posts: Posts.find({}).fetch()
  };
})(PostItem);

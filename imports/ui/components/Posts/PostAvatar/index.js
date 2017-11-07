import React from "react";
import Avatar from "material-ui/Avatar";

const PostAvatar = ({ src, avatarSize }) => {
  return (
    <div className="post-avatar-container">
      <Avatar
        className="post-avatar"
        src={src}
        size={avatarSize}
        style={{ marginRight: "0.5rem" }}
      />
    </div>
  );
};

export default PostAvatar;

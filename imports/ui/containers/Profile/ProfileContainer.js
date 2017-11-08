import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";

import { Profile } from './Profile';
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Badges } from "../../../api/badges/badges";

// import  Suggestions  from '../../components/Suggestions';

class ProfileContainer extends Component {

  constructor() {
    super();
  }

    render() {

      const {currentUser, posts} = this.props;

        return ( 
            <div>
                <Profile currentUser={currentUser} posts={posts} />
            </div>
        );
    }
}

ProfileContainer.propTypes = {};

export default withTracker(() => {
  Meteor.subscribe("posts");
  Meteor.subscribe("users");
  Meteor.subscribe("suggestions");

  return {
    currentUser: Meteor.user(),
    posts: Posts.find({}).fetch(),
    badges: Badges.find({}).fetch(),
  };
})(ProfileContainer);
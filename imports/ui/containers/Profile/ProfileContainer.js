import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";

import  Suggestions  from '../../components/Suggestions' //Only here to test layout while building
import { Profile } from './Profile';
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts";
import { Badges } from "../../../api/badges/badges";


class ProfileContainer extends Component {

  constructor() {
    super();
  }

    render() {
        return ( //Remove suggestions later
            <div>
                <Suggestions /> 
                <Profile />
            </div>
        );
    }
}

ProfileContainer.propTypes = {};

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    posts: Posts.find({}).fetch(),
    badges: Badges.find({}).fetch(),
  };
})(ProfileContainer);
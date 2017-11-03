import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import {Profile} from './Profile';

export default class ProfileContainer extends Component {

  constructor() {
    super();
  }

    render() {
        return (
            <Profile />
        );
    }
}
import { Mongo } from "meteor/mongo";
import React from "react";
import ShareConfirmation from "../../ui/components/Share/ShareConfirmation";

export const Posts = new Mongo.Collection("posts");

if (Meteor.isServer) {
  Meteor.publish("posts", function postsPublication() {
    return Posts.find({});
  });
}

// POSTS METHODS HERE
Meteor.methods({
  "posts.addCompliment"(to, body, from, users) {
    // set some rules for to
    // search for matches and reassign to with obj
    to = users.find(user => {
      name = `${user.profile.firstName} ${user.profile.lastName}`;
      if (to === name) {
        return name;
      } else {
        return undefined;
      }
    });

    if (to !== undefined) {
      toID = to._id;
    } else {
      return console.log("No user with that name.");
    }

    if (
      toID !== undefined &&
      body.length > 0 &&
      `${from._id}` === `${Meteor.user()._id}` &&
      `${toID}` !== `${Meteor.user()._id}`
    ) {
      Posts.insert({
        to,
        body,
        from,
        upvotes: [],
        sarcasm: []
      });

      return true;
    } else {
      return false;
    }
  }
});

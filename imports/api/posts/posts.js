import { Mongo } from "meteor/mongo";
import React from "react";

export const Posts = new Mongo.Collection("posts");

if (Meteor.isServer) {
  Meteor.publish("posts", function postsPublication() {
    return Posts.find({});
  });
}

// POSTS METHODS HERE
Meteor.methods({
  "posts.removeUserId"(post, collection) {
    Posts.update(
      { _id: `${post}` },
      { $pull: { [collection]: `${Meteor.user()._id}` } }
    );
  },
  "posts.addUserId"(post, collection) {
    Posts.update(
      { _id: `${post}` },
      { $addToSet: { [collection]: `${Meteor.user()._id}` } }
    );
  },
  "posts.addCompliment"(to, body, from, anon, users) {
    const dateArr = [];
    const tzOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
    const localTime = `${new Date(Date.now() - tzOffset)
      .toUTCString()
      .slice(5, -13)
      .split(" ")
      .forEach(elem => dateArr.push(elem))}`;

    const formattedDate = `${dateArr[1]} ${dateArr[0]} ${dateArr[2]}`;

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
        anon,
        upvotes: [],
        sarcasm: [],
        dateCreated: formattedDate,
        sortDate: Date.now()
      });

      return true;
    } else {
      return false;
    }
  },
  "posts.updatePostsImage"(userId, imageUrl) {
    Posts.update(
      { "from._id": `${userId}` },
      { $set: { "from.profile.photo": `${imageUrl}` } },
      { multi: true }
    );
  }
});

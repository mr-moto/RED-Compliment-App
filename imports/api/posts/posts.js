import { Mongo } from "meteor/mongo";

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

    toID = to._id;

    if (
      toID !== undefined &&
      body.length > 0 &&
      `${from._id}` === `${Meteor.user()._id}` &&
      `${toID}` !== `${Meteor.user()._id}`
    ) {
      Posts.insert({
        to,
        body,
        from
      });
      console.log("added successfully!");
    } else {
      console.log("failed to add!");
    }
  }
});

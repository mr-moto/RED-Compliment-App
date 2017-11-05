import { Mongo } from "meteor/mongo";

export const Posts = new Mongo.Collection("posts");

if (Meteor.isServer) {
  Meteor.publish("posts", function postsPublication() {
    return Posts.find({});
  });
}

// POSTS METHODS HERE

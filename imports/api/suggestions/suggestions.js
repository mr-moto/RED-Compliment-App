import { Mongo } from "meteor/mongo";

export const Suggestions = new Mongo.Collection("suggestions");

// SUGGESTIONS METHODS HERE

if (Meteor.isServer) {
  Meteor.publish("suggestions", function suggestionsPublication() {
    return Suggestions.find({});
  });
}
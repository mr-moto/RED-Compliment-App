import { Mongo } from "meteor/mongo";

export const Quotes = new Mongo.Collection("quotes");

// QUOTES METHODS HERE
if (Meteor.isServer) {
  Meteor.publish("quotes", function quotesPublication() {
    return Quotes.find({});
  });
}
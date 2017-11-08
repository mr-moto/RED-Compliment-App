import { Meteor } from "meteor/meteor";
import { Posts } from "../../api/posts/posts";
import { Quotes } from "../../api/quotes/quotes";
import { Suggestions } from "../../api/suggestions/suggestions";
import { Badges } from "../../api/badges/badges";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  // START UP CODE HERE
  let user = {};

  if (Meteor.users.find().count() === 0) {
    (user = Accounts.createUser({
      email: "admin@123.com",
      password: "pass",
      profile: {
        firstName: "Andrew",
        lastName: "Gonzalous",
        email: "abc@abc.com",
        photo:
          "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
      }
    })),
      Accounts.createUser({
        email: "abc@123.com",
        password: "password",
        profile: {
          firstName: "Alicia",
          lastName: "White",
          email: "abc@abc.com",
          photo:
            "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        }
      });
  } else {
    user = `${Meteor.users.findOne()._id}`;
  }
  if (Quotes.find().count() === 0) {
    Quotes.insert({
      quote: "shamwowowowowowowowo"
    });
    Quotes.insert({
      quote: "yesyesyes"
    });
    Quotes.insert({
      quote: "and and and"
    });
    Quotes.insert({
      quote: "💩 💩 💩 💩"
    });
  }


  if (Posts.find().count() === 0) {
    Posts.insert({
      to: Meteor.users.findOne(),
      from: Meteor.users.findOne({}, { skip: 1 }),
      body: "This is a beautiful world...",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne({}, { skip: 1 }),
      from: Meteor.users.findOne(),
      body: "Nice haircut!",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne(),
      from: Meteor.users.findOne({}, { skip: 1 }),
      body: "Nice face!!",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne({}, { skip: 1 }),
      from: Meteor.users.findOne(),
      body: "That shirt of yours is so cool!",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne(),
      from: Meteor.users.findOne({}, { skip: 1 }),
      body: "Always like talking to you!",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne({}, { skip: 1 }),
      from: Meteor.users.findOne(),
      body: "Always a pleasure chillin",
      upvotes: [],
      sarcasm: []
    });
    Posts.insert({
      to: Meteor.users.findOne(),
      from: Meteor.users.findOne({}, { skip: 1 }),
      body: "How are you so good at beer pong?!",
      upvotes: [],
      sarcasm: []
    });
  }

  Meteor.publish("users", function usersPublication() {
    return Meteor.users.find();
  });

  if (Suggestions.find().count() === 0) {

    Suggestions.insert([
      "Your beer pong skills are insane",
      "That project looked so professional", 
      "Your lunch always looks delicious", 
      "I love your dog Betsy!", 
      "You have such a friendly smile",
      "Thanks for helping me with my project!"
    ]);
  }

  // Suggestions.remove({});

});

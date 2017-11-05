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

  if (Posts.find().count() === 0) {
    Posts.insert({
      to: Meteor.users.findOne(),
      from: Meteor.users.findOne({}, { skip: 1 }),
      body: "This is a beautiful world..."
    });
  }
});

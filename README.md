# Kindred - A Compliment Giving App

Kindred is an Android/iOS App built with Meteor that allows users to send and receive compliments from others! It's designed to be lighthearted and fun, with the goal of brightening up the user's day. The scope of the app currently focuses on serving RED Academy students.

## Kindred Mobile

![](/KindredMobile.jpg)

## Features

  - User authentication with ability to create new accounts, including uploading profile images
  - Homepage where users can see their recently received compliments, and all compliments sent between users
  - Ability to filter compliments by various categories
  - Upvote/downvote/sarcasm buttons with counter
  - Share form allowing users to send compliments to other users. Users can also post compliments anonymously.
  - User's profile page where they can view received/sent compliments
  - User "badges" that dynamically upgrade as the user posts more compliments
  - Settings page where users can update their profile image or password
  
## Tech Used

  - Meteor 
  - Javascript (ES6)
  - ReactJS
  - React Router
  - Material UI
  - BCrypt
  - Firebase
  - Babel Compiler
  - HTML
  - CSS

## Installation

### Base installation

```sh
$ npm install
```

### To start in your browser

```sh
$ meteor
```

### To run on iOS

First download and install XCode from the Apple App Store. Then:

```sh
$ meteor run ios
```

### To run on Android

First download and install Android Studio. Then:

```sh
$ meteor run android
```

## Todos/Next Steps

 - Setup Android & iOS developer accounts and push the app to their respective App Stores!
 - Create a way to moderate user posts, and remove disrespectful or inappropriate comments
 - Create organizational login, to expand scope of app. Users can then only see users in their "group", such as a workplace or school.
 - Add capability for users to delete their accounts
 - Further UX/UI improvements
 
## Authors
#### Kenneth Chow
#### Kevin Hashimoto
#### Daniel Kell

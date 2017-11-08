import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB2OoT1GyXTlXjifRsGii75tJBxpy57M2s",
    authDomain: "red-compliment-app.firebaseapp.com",
    databaseURL: "https://red-compliment-app.firebaseio.com",
    projectId: "red-compliment-app",
    storageBucket: "red-compliment-app.appspot.com",
    messagingSenderId: "293035733775"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
const firebaseStorage = firebase.storage(firebaseApp);
const firebaseDB = firebase.database();

export { config, firebaseApp, firebaseAuth, firebaseStorage, firebaseDB };

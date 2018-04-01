import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyB0yA3XjsMeLq5sNGJKvJFbIZ0z3IWeTyY",
    authDomain: "oa-loops-e3067.firebaseapp.com",
    databaseURL: "https://oa-loops-e3067.firebaseio.com",
    projectId: "oa-loops-e3067",
    storageBucket: "oa-loops-e3067.appspot.com",
    messagingSenderId: "894635873660"
};

// const config = {
//     apiKey: YOUR_API_KEY,
//     authDomain: YOUR_AUTH_DOMAIN,
//     databaseURL: YOUR_DATABASE_URL,
//     projectId: YOUR_PROJECT_ID,
//     storageBucket: "",
//     messagingSenderId: YOUR_MESSAGING_SENDER_ID
// };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };

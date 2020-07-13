import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAsALZcYhNHg60vb7yv2GCw1vrA3keAtIw",
  authDomain: "tcs-io.firebaseapp.com",
  databaseURL: "https://tcs-io.firebaseio.com",
  projectId: "tcs-io",
  storageBucket: "tcs-io.appspot.com",
  messagingSenderId: "302656240503",
  appId: "1:302656240503:web:eef537c72cf453cb92bf72"
});

export const db = app.firestore;
export const auth = app.auth;

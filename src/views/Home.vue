<template>
  <h1>create user account test</h1>
</template>

<script>
//import { auth } from "@/db";
import firebase from "firebase";

const email = "test1@gmail.com";
const password = "abcd1234";

console.log(`info: imported auth object is ${firebase.auth}`);
console.log(`info: creating firebase app`)

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAsALZcYhNHg60vb7yv2GCw1vrA3keAtIw",
    authDomain: "tcs-io.firebaseapp.com",
    databaseURL: "https://tcs-io.firebaseio.com",
    projectId: "tcs-io",
    storageBucket: "tcs-io.appspot.com",
    messagingSenderId: "302656240503",
    appId: "1:302656240503:web:eef537c72cf453cb92bf72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

console.log(`info: creating a new user ${email}|${password}`);

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(result => {
    console.log(`info: result of createUserWithEmailAndPassword was ${result}`);
  });

console.log("info: end of test");
</script>

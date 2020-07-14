<template>
  <h1>create user account test</h1>
</template>

<script>
//import { auth } from "@/db";
import firebase from "firebase";

const email = "test1@gmail.com";
const password = "abcd1234";

console.log(`info: imported auth object is ${firebase.auth}`);
console.log(`info: creating a new user ${email}|${password}`);

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(result => {
    console.log(`info: result of createUserWithEmailAndPassword was ${result}`);
  });

console.log("info: end of test");
</script>

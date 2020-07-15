<template>
  <div></div>
</template>

<script>
import { firebase } from "@/fb";

const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().languageCode = "en";

firebase.auth().signInWithRedirect(provider);
firebase
  .auth()
  .getRedirectResult()
  .then(result => {
    console.log(result);
  });
</script>

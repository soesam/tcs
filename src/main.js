import Vue from "vue";
import firebase from 'firebase/app';
import app from "./app.vue";
import "./worker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyAsALZcYhNHg60vb7yv2GCw1vrA3keAtIw",
  authDomain: "tcs-io.firebaseapp.com",
  databaseURL: "https://tcs-io.firebaseio.com",
  projectId: "tcs-io"
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(app)
}).$mount("#app");

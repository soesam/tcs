import Vue from "vue";
import App from "./App.vue";
import * as firebase from 'firebase/app'
import 'firebase/auth'
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAsALZcYhNHg60vb7yv2GCw1vrA3keAtIw",
  authDomain: "tcs-io.firebaseapp.com",
  databaseURL: "https://tcs-io.firebaseio.com",
  projectId: "tcs-io",
  storageBucket: "tcs-io.appspot.com",
  messagingSenderId: "302656240503",
  appId: "1:302656240503:web:eef537c72cf453cb92bf72"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

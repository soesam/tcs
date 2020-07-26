import Vue from "vue";
import firebase from "firebase/app";
import app from "./app.vue";
import "./worker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(app)
}).$mount("#app");

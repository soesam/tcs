import Vue from "vue";
import * as firebase from "firebase/app";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import config from './firebase.config.js'

firebase.initializeApp(config);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

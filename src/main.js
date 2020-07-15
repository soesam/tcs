import Vue from "vue";
import app from "./app.vue";
import "./worker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(aapp)
}).$mount("#app");

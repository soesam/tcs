<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
=======
import Vue from "vue";
import App from "./App.vue";
import "./worker";
import router from "./router";
import store from "./store";
import { firestorePlugin } from "vuefire";
import vuetify from "./plugins/vuetify";

Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
>>>>>>> stable

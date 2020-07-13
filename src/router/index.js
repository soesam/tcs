import Vue from "vue";
import VueRouter from "vue-router";
import Start from "@/views/Start.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/start",
    name: "start",
    component: Start
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "start" && !true /* TODO: firebase authentication check. */)
    next({ name: "start" });
  else next();
});

export default router;

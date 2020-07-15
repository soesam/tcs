import Vue from "vue";
import VueRouter from "vue-router";
import site from "@/views/site.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "site",
    component: site
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

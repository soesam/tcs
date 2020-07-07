import Vue from "vue";
import VueRouter from "vue-router";
const firebase = require('firebase');
import Test from "@/views/Test.vue";
import Signin from "@/views/Signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/signin"
  },
  {
    path: "/",
    redirect: "/signin"
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const shouldAuth = to.matched.some(record => record.meta.requiresAuth);

  if (shouldAuth && !user) next("signin");
  else if (!shouldAuth && user) next("home");
  else next();
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Classes from "@/views/Classes.vue";
import Signin from "@/views/Signin.vue";
import Signup from "@/views/Signup.vue";
import { auth } from "@/db";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      surface: true
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
    meta: {
      surface: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: {
      surface: true
    }
  },
  {
    path: "/classes",
    name: "classes",
    component: Classes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const guard = (to, from, next) => {
  let hidden = !to.matched.some(r => r.meta.surface);
  let user = auth.currentUser;

  if (hidden && !user) next("signin");
  else if (!hidden && user) next("home");
  else next();
};

router.beforeEach(guard);

export default router;

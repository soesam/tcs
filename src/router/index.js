import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/app";
import Home from "@/views/Home.vue";
import Lost from "@/views/Lost.vue";
import Login from "@/views/Login.vue";
import Join from "@/views/Join.vue";
import Classes2 from "@/views/Classes2.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      hidden: false
    }
  },
  {
    path: "/join",
    name: "join",
    component: Join,
    meta: {
      hidden: false
    }
  },
  {
    path: "/classes",
    name: "classes",
    component: Classes2,
    meta: {
      hidden: false
    }
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "*",
    name: "lost",
    component: Lost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const guard = (to, from, next) => {
  let user = auth().currentUser;
  let hidden = to.matched.some(r => r.meta.hidden);

  if (hidden && !user) next("login");
  else if (!hidden && user) next("home");
  else next();
};

router.beforeEach((...r) => guard(...r));

export default router;

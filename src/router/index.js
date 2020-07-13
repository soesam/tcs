import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from './firebase';
import Home from "@/views/Home.vue";
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';

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
    path: "/signup",
    name: 'signup',
    component: Signup,
    meta: {
      hidden: false
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const guard = (to, from, next) => {
  let user = auth().currentUser
  let hidden = to.matched.some(r => r.meta.hidden)

  if (hidden && !user) next('login');
  else if (!hidden && user) next('home');
  else next();
}

router.beforeEach((...p) => guard(...p))

export default router;

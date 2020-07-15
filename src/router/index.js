import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/db";
import { add } from '@/views/user.vue';
import { login } '@/views/user.vue';
import site from '@/views/site.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "site",
    component: site
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

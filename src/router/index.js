import Vue from "vue";
import VueRouter from "vue-router";
import site from "@/views/site.vue";
import Classes from "@/views/Classes.vue"
// tests

import student from "@/views/student/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "site",
    component: site
  },
  {
    path: "/tmp-student",
    name: "student",
    component: student
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// TODO: hook before each. If the user is a student grant access to routes starting with student/. If a teacher,
// grant access to those starting with teacher/. Else, if the user is logged in grant access to those under shared/.
// otherwise, grant access only to site.vue.

export default router;

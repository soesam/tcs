import Vue from "vue";
import VueRouter from "vue-router";
import site from "@/views/site.vue";
import student from "@/views/student/assigned/index.vue";
import profile from "@/views/student/profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/tests/site",
    name: "site",
    component: site
  },
  {
    path: "/tests/student",
    name: "student",
    component: student
  },
  {
    path: "/test/profile",
    name: "profile",
    component: profile
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

// TODO: move app-bar and app-drawer out of individual views and into app.
// it can be imported by each view and they can specify its mode, i.e. student or teacher.

export default router;

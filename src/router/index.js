import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home";
import Restaurant from "@/pages/Restaurant";
import User from "@/pages/User";
import Login from "@/pages/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/restaurant/:id",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

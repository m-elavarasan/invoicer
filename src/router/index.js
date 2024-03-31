import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login/Login.vue";
import { useAuthStore } from "../stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: requireLoggedIn, 
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

function requireLoggedIn(to, from, next) {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
}

export default router;

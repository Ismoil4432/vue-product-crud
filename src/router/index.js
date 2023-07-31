import { createRouter, createWebHistory } from "vue-router";
import Product from "../views/Product.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product",
      component: Product,
    },
  ],
});

export default router;

import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
// import MenSection from './components/MenSection.vue';
// import WomenSection from './components/WomenSection.vue';
// import ElectronicsSection from './components/ElectronicsSection.vue';
// import JewelerySection from './components/JewelerySection.vue';
import HomePage from "./components/HomePage.vue";
import ProductsSection from "./components/ProductsSection.vue";
import ProductDetail from "./components/ProductDetail.vue";
import userLogin from "./components/userLogin.vue";
import userRegister from "./components/userRegister.vue";
import i18n from "./i18n.js";
const app = createApp(App).use(i18n);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    // {
    //     path:'/men',
    //     component: MenSection
    // },
    // {
    //     path:'/women',
    //     component: WomenSection
    // },
    // {
    //     path:'/electronics',
    //     component:ElectronicsSection
    // },
    // {
    //     path:'/jewelery',
    //     component: JewelerySection
    // },
    {
      path: "/category/:category",
      name: "category",
      component: ProductsSection,
      props: true,
    },
    {
      path: "/category/:category/:id",
      name: "product",
      component: ProductDetail,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: userLogin,
    },
    {
      path: "/register",
      name: "register",
      component: userRegister,
    },
  ],
});

app.use(router);
app.mount("#app");

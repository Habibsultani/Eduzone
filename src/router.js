import { createRouter, createWebHistory } from "vue-router";

import MainPage from "./components/MainPage.vue";
import StartPage from "./components/StartPage.vue";
import RigisterUser from "./components/RigisterUser.vue";
import LoginUser from "./components/LoginUser.vue";
import Aboutpage from "./components/Aboutpage.vue";
import MyLearning from "./components/MyLearning.vue";
import OurServices from "./components/OurServices.vue";
import SearchPage from "./components/SearchPage.vue";
import Mypayment from "./components/Mypayment.vue";
import NotificationPage from "./components/NotificationPage.vue";
import SavedItems from "./components/SavedItems.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: MainPage },
    { path: "/start", component: StartPage },
    { path: "/register", component: RigisterUser },
    { path: "/login", component: LoginUser },
    { path: "/about", component: Aboutpage },
    { path: "/my-learning", component: MyLearning },
    { path: "/service", component: OurServices },
    { path: "/search", component: SearchPage },
    { path: "/notification", component: NotificationPage },
    { path: "/my-payment", component: Mypayment },
    { path: "/saved", component: SavedItems },
  ],
});

export default router;

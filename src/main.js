import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router.js";

import TopShape from "./UI/TopShape.vue";
import TheFooter from "./UI/TheFooter.vue";

const app = createApp(App);
app.component("top-shape", TopShape);
app.component("the-footer", TheFooter);
app.use(router);
app.mount("#app");

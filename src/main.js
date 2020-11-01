import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";

import { Modal } from "./components/";

const app = createApp(App);

app.use(router);

app.component("Modal", Modal);

app.mount("#app");

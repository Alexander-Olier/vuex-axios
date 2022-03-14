import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

//archivos and screen
import Home from "./screen/Home.screen.vue";
import ListOne from "./screen/ListOne.vue";
import App from "./App.vue";
import store from "@/store/index";

//for icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


//routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: Home, component: Home },
    { path: "/posts/:id", name: ListOne, component: ListOne },
  ],
});

//icons
library.add(fas, fab, far);

createApp(App)

  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");

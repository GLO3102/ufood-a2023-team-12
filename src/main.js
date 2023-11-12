import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faStar,
  faStarHalfStroke,
  faSliders,
  faX,
  faRadio,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faXmark,
  faStar,
  faStarHalfStroke,
  faSliders,
  faX,
  faRadio,
  faPen,
  faTrashCan,
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

const user = {
  id: "654ff1f65d5104359a2cf011",
  name: "alex",
  email: "alex@alex.com",
  rating: 0,
};
localStorage.setItem("user", JSON.stringify(user));

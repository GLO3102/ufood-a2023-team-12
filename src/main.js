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
  id: "65513eb632be12f479d4ae0d",
  name: "John Doe",
  email: "john@mail.com",
  rating: 0,
};

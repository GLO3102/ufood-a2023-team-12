import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faXmark,
  faStar,
  faStarHalfStroke,
  faSliders,
  faX,
  faRadio
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faXmark, faStar, faStarHalfStroke, faSliders, faX, faRadio);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

const user = {
  "id": "64160258442a95fe2735419d",
  "name": "John Doe",
  "email": "john@mail.com",
  "rating": 0
}
localStorage.setItem('user', JSON.stringify(user));

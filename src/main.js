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
  email: 'john.doe@gmail.com',
  name: 'John Doe',
  id: '6b063a71f1e74928bf6ad5bdfdd302e9',
  password: 'test',
};
localStorage.setItem('user', JSON.stringify(user));

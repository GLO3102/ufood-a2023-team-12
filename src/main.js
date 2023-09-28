import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark, faStar } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faXmark, faStar);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

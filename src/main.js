import { createApp } from "vue";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMagnifyingGlass,
  faBars,
  faUser,
  faTag,
  faCheck,
  faXmark,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import { faClipboard } from "@fortawesome/free-regular-svg-icons";

library.add(
  faMagnifyingGlass,
  faBars,
  faClipboard,
  faUser,
  faTag,
  faCheck,
  faXmark,
  faChevronUp
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

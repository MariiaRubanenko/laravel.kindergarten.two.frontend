import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/rouer";

import Select2 from "vue3-select2-component";

import { createI18n, useI18n } from "vue-i18n";
import { languages } from "@/i18n";
import { defoltLocale } from "@/i18n";

import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

//axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";

const localStorageLang = localStorage.getItem("lang");
const messages = Object.assign(languages);

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});

const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defoltLocale,
  fallbackLocale: "en",
  messages,
});

import { logout } from "@/api/request";
import { isAxiosError } from "axios";

app.use(i18n).use(router).mount("#app");
// eslint-disable-next-line
app.component("Select2", Select2);

app.config.errorHandler = async (err) => {
  console.error(err);
  if (isAxiosError(err)) {
    switch (err.response?.status) {
      case 419:
      case 401:
        await logout();
        break;
      case 404:
        router.push("/404");
        break;
      case 500:
        router.push("/500");
        break;
    }
  }
};

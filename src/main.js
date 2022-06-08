import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgIconPlugin from "@/plugins/svg-icon";

Vue.config.productionTip = false;

Vue.use(SvgIconPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

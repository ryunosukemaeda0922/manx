import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import vueSmoothScroll from "vue-smooth-scroll";
Vue.use(vueSmoothScroll);

import VueObserveVisibility from "vue-observe-visibility";
Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

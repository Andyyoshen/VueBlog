import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import mixin from './components/Mixin.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Element from 'element-ui'
import "../../public/dist/js/adminlte.js"
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Element)
Vue.mixin(mixin)
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#back-app");

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './components/Mixin.vue'
import axios from 'axios'
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor);
// import  { Quill } from 'vue-quill-editor'
// import ImageResize from 'quill-image-resize-module'
// Quill.register('modules/imageResize', ImageResize)
// import $ from 'jquery'
// window.$ = $
// Vue.use($)
// Vue.use(ImageResize)
Vue.mixin(mixin)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

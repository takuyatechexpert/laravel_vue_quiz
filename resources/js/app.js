import Vue from 'vue'
import router from './router.js'
import SocialSharing from 'vue-social-sharing'
import axios from 'axios'
import MainPage from './components/page/MainPage'

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require('bootstrap');

// require('./bootstrap');

Vue.prototype.$http = axios;

axios.defaults.headers.common['Authorization'] = "Bearer " + document
  .querySelector('meta[name="api-token"]')
  .getAttribute("content");

Vue.use(SocialSharing);

new Vue({
  
  router: router, // routerにはrouter.jsファイルを設定
  components: {
    app: MainPage
  }

 }).$mount('#app')
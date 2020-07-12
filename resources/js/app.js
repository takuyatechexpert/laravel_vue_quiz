import Vue from 'vue'
import router from './router.js'
import SocialSharing from 'vue-social-sharing'
import axios from 'axios'

require('./bootstrap');

Vue.prototype.$http = axios;
Vue.use(SocialSharing);

new Vue({
  router: router, // routerにはrouter.jsファイルを設定
 }).$mount('#app')
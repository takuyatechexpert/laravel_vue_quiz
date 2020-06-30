import Vue from 'vue'
import App from './components/HelloWorld'

new Vue({
  el: 'app',
  components: {
    app: App //使用するコンポーネントの名称とコンポーネントを指定 importでAppを指定している
  }
})

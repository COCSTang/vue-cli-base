import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css'
import { Button } from 'vant'
Vue.use(Button)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

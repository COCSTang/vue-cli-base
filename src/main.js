import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index.js'
import 'normalize.css'
import util from '@/utils/index.js'
import VueIconfont from '@/components/vue-iconfont/index.js'
Vue.prototype.util = util
Vue.config.productionTip = false

Vue.use(VueIconfont,
  { scriptUrl: '//at.alicdn.com/t/font_1229275_j8bnjx9nk8.js' }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

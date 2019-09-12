
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/components/index.js'
// import post from '@/api/index'
// import get from '@/api/index'
// import put from '@/api/index'
import '@/api/index'
// import  '@/api/api.js'
import apis from '@/api/api'
// Vue.prototype.$post = post
// Vue.prototype.$put = put
Vue.prototype.$apis = apis
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

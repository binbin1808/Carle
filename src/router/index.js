import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: routers
})
export default router

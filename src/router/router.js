export default [
  {
    path: '/',
    name: 'home',
    meta: { showBottomMenu: true },
    component: require('../views/home').default
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/login/index.vue').default
  }
]

export default [
  {
    path: '/',
    name: 'home',
    meta: { showBottomMenu: true },
    // component: require('../views/home').default
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]

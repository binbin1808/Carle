import Vue from 'vue'
const componentContext = require.context('./global', true, /\.js$/)

componentContext.keys().forEach(component => {
  const componentConfig = componentContext(component)
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})

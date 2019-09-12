import Vue from 'vue'
import module from '@/api/modules'

Vue.prototype.$api = module

export default {
  module
}

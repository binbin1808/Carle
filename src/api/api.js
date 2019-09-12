import axios from 'axios'
import Vue from 'vue'
import router from '../router'
import { Toast } from 'vant'
import qs from 'qs'
Vue.prototype.$axios = axios
const service = axios.create({
  // 设置超时时间
  timeout: 6000,
  baseURL: 'http://192.168.0.112:3000',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// service.defaults.headers.Options['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
// let loading = null
service.interceptors.request.use(config => {
  // 在请求先展示加载框
  // loading = Loading.service({
  //   text: '正在加载中......'
  // })
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  config.headers['Content-Type'] = 'application/json'
  return config
}, (error) => {
  return Promise.reject(error)
})
/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
  // 请求响应后关闭加载框
  // if (loading) {
  //   loading.close()
  // }
  const responseCode = response.status
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (responseCode === 200) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}, error => {
  // 请求响应后关闭加载框
  // if (loading) {
  //   loading.close()
  // }
  // 断网 或者 请求超时 状态
  if (!error.response) {
    // 请求超时状态
    if (error.message.includes('timeout')) {
      console.log('超时了')
      // Toast.error('请求超时，请检查网络是否连接正常')
    } else {
      // 可以展示断网组件
      console.log(service.defaults.headers.post['Content-Type'])
      console.log('断网了')
      // Toast.error('请求失败，请检查网络是否已连接')
    }
    return
  }
  // 服务器返回不是 2 开头的情况，会进入这个回调
  // 可以根据后端返回的状态码进行不同的操作
  const responseCode = error.response.status

  switch (responseCode) {
    // 401：未登录
    case 401:
      // 跳转登录页
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      })
      break
    // 403: token过期
    case 403:
      // 弹出错误信息
      Toast({
        type: 'error',
        message: '登录信息过期，请重新登录'
      })
      // 清除token
      localStorage.removeItem('token')
      // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }, 1000)
      break
    // 404请求不存在
    case 404:
      Toast({
        message: '网络请求不存在',
        type: 'error'
      })
      break
    // 其他错误，直接抛出错误提示
    default:
      Toast({
        message: error.response.data.message,
        type: 'error'
      })
  }
  return Promise.reject(error)
})
export const uploadFile = formData => {
  const res = service.request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return res
}
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.post(url, qs.stringify(data))
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const drop = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    service.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
export default service
export const apis = { get, post, drop, patch, put }

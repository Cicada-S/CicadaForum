import axios from 'axios'

export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  // 2. axios的拦截器
  // 2.1. 请求拦截的作用
  instance.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token')
    if(token) config.headers.Authorization = token
    return config
  }, err => {
    return new Promise.reject(err)
  })

  // 2.2. 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return new Promise.reject(err)
  })

  // 3. 发送真正的网络请求  instance返回的是一个Promise
  return instance(config)
}

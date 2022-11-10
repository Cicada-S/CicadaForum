import { request } from '../request.js'

// 登录请求
export const PostLoginAPI = () => {
  return request.post({
    url: '/login',
    params: {
      phone,
      passwword
    }
  })
}

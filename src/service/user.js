/**
 * Created by zhengchangshun on 2018/4/15.
 */

import request from '../utils/request'

// login
export const login = (params = {}) => {
  return request(`user/login`, {
    body: {
      ...params
    },
  })
}


//getCode 获取验证码
export const getCode = (params = {}) => {
  return request('/kff/dynamicValidateCode/send', {
    body: {
      ...params
    }
  })
}

//register 注册
export const register = (params = {}) => {
  return request('/kff/user/register', {
    body: {
      ...params
    }
  })
}
